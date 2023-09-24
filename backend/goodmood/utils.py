import requests
import datetime
import jdatetime
import random
import string
import urllib.request
from math import ceil
from django.conf import settings
from django.core.exceptions import ValidationError
from django.core.files.uploadedfile import SimpleUploadedFile
from django.utils import timezone
from urllib.parse import urlparse
from financial.models import PriceDetermination


def google_get_access_token(*, code: str, redirect_uri: str) -> str:
    data = {
        'code': code,
        'client_id': settings.GOOGLE_OAUTH2_CLIENT_ID,
        'client_secret': settings.GOOGLE_OAUTH2_CLIENT_SECRET,
        'redirect_uri': redirect_uri,
        'grant_type': 'authorization_code'
    }
    response = requests.post(settings.GOOGLE_ACCESS_TOKEN_OBTAIN_URL, data=data)
    print('\n------------------------------------\n', response, flush=True)
    print('\n------------------------------------\n', data, flush=True)
    if not response.ok:
        raise ValidationError('Failed to obtain access token from Google.')
    access_token = response.json()['access_token']
    return access_token


def google_get_user_info(*, access_token: str) -> dict[str, any]:
    response = requests.get(
        settings.GOOGLE_USER_INFO_URL,
        params={'access_token': access_token}
    )
    if not response.ok:
        raise ValidationError('Failed to obtain user info from Google.')
    return response.json()


def save_avatar_from_url(user, url):
    basename = urlparse(url).path.split('/')[-1]+'.jpg'
    tmpfile, _ = urllib.request.urlretrieve(url)
    user.avatar = SimpleUploadedFile(basename, open(tmpfile, "rb").read())
    user.save()


def otp_generator(digits=settings.OTP_LENGTH):
    digits -= 1
    f = int('1' + ('0' * digits))
    t = int('9' + ('9' * digits))
    return random.randint(f, t)


def otp_expired_check():
    return timezone.now() - timezone.timedelta(seconds=settings.OTP_EXPIRATION_TIME_SECONDS)


def convert_fa_to_en_digits(otp):
    switch = {
        '۰': '0',
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9'
    }
    result = ''
    for digit in str(otp):
        result += switch.get(digit, digit)

    return result


def get_jalali(dt):
    if isinstance(dt, datetime.datetime):
        try:
            return str(jdatetime.datetime.fromgregorian(date=dt))[:16].replace('-', '/')
        except:
            return None
    else:
        try:
            res = str(jdatetime.date.fromgregorian(
                year=int(str(dt).split('-')[0]),
                month=int(str(dt).split('-')[1]),
                day=int(str(dt).split('-')[2]),
            ))
            return res.replace('-', '/')
        except:
            return None


def format_date_to_letters(dt):
    days = timezone.now() - dt
    days = days.days
    if days == 0:
        return 'امروز'
    if days < 7:
        return f'{days} روز پیش '
    if days < 30:
        return f'{days // 7} هفته پیش '
    if days < 365:
        return f'{days // 30} ماه پیش '

    return f'{days // 365} سال پیش '


def get_true_false_value(val):
    if val in ['true', 'True', True, '1', 1]:
        return True
    if val in ['false', 'False', False, '0', 0]:
        return False
    return None


def get_experience_years(certified_at):
    try:
        return datetime.date.today().year - certified_at.year
    except:
        return 0


def get_user_info(user, role):

    province_and_city = None
    mobile_is_editable = True if user.registered_by != 1 and not user.mobile_confirmed else False
    email_is_editable = True if user.registered_by != 2 else False
    if user.province_and_city:
        province_and_city = dict({'city_id': user.province_and_city.pk,
                                  'city': user.province_and_city.name,
                                  'province_id': user.province_and_city.province.pk,
                                  'province': user.province_and_city.province.name})

    res = {
        'id': user.id,
        'mobile': user.mobile,
        'email': user.email,
        'name': user.name,
        'gender': user.gender,
        'complete_registration': user.complete_registration,
        'deaf': user.deaf,
        'birthday': str(user.birthday),
        'province_and_city': province_and_city,
        'avatar': str(user.avatar.url) if user.avatar else None,
        'mobile_is_editable': mobile_is_editable,
        'email_is_editable': email_is_editable,
        'balance': str(user.balance()),
    }

    if role == 'expert':
        res = {
            'expert': {},
        }

        if user.expert:
            expert = user.expert
            res['expert']['degree'] = expert.degree
            res['expert']['counseling_types'] = expert.counseling_types
            res['expert']['certified_at'] = expert.certified_at
            res['expert']['created_at'] = expert.created_at
            res['expert']['certification_id'] = expert.certification_id
            res['expert']['accepts_insurance'] = expert.accepts_insurance
            res['expert']['call_interval_avg'] = expert.call_interval_avg
            res['expert']['is_active'] = expert.is_active
            res['expert']['bio'] = expert.bio
            res['expert']['bio_video'] = expert.bio_video
            res['expert']['bio_video'] = str(expert.bio_video.url) if expert.bio_video else None
            res['expert']['expertise'] = []
            res['expert']['title'] = None

            for ex in expert.expertise.all():
                expertise = {'id': ex.id, 'title': ex.title}
                if ex.icon:
                    expertise['icon'] = str(ex.icon.url)
                res['expert']['expertise'].append(expertise)

            if expert.title:
                res['expert']['title'] = {'id': expert.title.id, 'title': expert.title.title}

            if expert.verifies:
                verifies = []
                for verify in expert.verifies.all():
                    verifies.append({
                        'id': verify.id,
                        'status': verify.status,
                        'description': verify.description,
                        'created_at': get_jalali(verify.created_at),
                    })
                res['expert']['verifies'] = verifies

    return res


def gift_code_generator():
    rand_chars = string.ascii_lowercase + string.digits
    chars = ''.join(random.choice(rand_chars) for x in range(10))

    return str(chars)


def get_read_time(content):
    return ceil(len(content.split(' '))/230)


def get_expert_counseling_amount(expert, counseling_type):
    amount = PriceDetermination.objects.filter().order_by('id').last()
    experience = get_experience_years(expert.certified_at)

    if str(counseling_type) == 'in_office':
        if expert.degree == 1:
            match experience:
                case x if x < 10:
                    return amount.in_office_msc_ex_0_10
                case x if x < 20:
                    return amount.in_office_msc_ex_10_20
                case _:
                    return amount.in_office_msc_ex_20_up
        elif expert.degree == 2:
            match experience:
                case x if x < 10:
                    return amount.in_office_phd_ex_0_10
                case x if x < 20:
                    return amount.in_office_phd_ex_10_20
                case _:
                    return amount.in_office_phd_ex_20_up

    elif str(counseling_type) == 'voice_call':
        if expert.degree == 1:
            match experience:
                case x if x < 10:
                    return amount.voice_call_msc_ex_0_10
                case x if x < 20:
                    return amount.voice_call_msc_ex_10_20
                case _:
                    return amount.voice_call_msc_ex_20_up
        elif expert.degree == 2:
            match experience:
                case x if x < 10:
                    return amount.voice_call_phd_ex_0_10
                case x if x < 20:
                    return amount.voice_call_phd_ex_10_20
                case _:
                    return amount.voice_call_phd_ex_20_up

    elif str(counseling_type) == 'video_call':
        if expert.degree == 1:
            match experience:
                case x if x < 10:
                    return amount.video_call_msc_ex_0_10
                case x if x < 20:
                    return amount.video_call_msc_ex_10_20
                case _:
                    return amount.video_call_msc_ex_20_up
        elif expert.degree == 2:
            match experience:
                case x if x < 10:
                    return amount.video_call_phd_ex_0_10
                case x if x < 20:
                    return amount.video_call_phd_ex_10_20
                case _:
                    return amount.video_call_phd_ex_20_up

    return False
