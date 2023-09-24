import re
import magic
from django.conf import settings
from django.utils.deconstruct import deconstructible
from django.utils.translation import gettext_lazy as _
from rest_framework.serializers import ValidationError
from kavenegar import KavenegarAPI, APIException, HTTPException
from goodmood import exceptions
from goodmood.utils import otp_generator, otp_expired_check, convert_fa_to_en_digits


# ><><><><><><><><><><><<><><><><><><><><>--> Mobile Validator

def mobile_validator(mobile):
    try:
        mobile = convert_fa_to_en_digits(mobile)
        res = str(re.sub("[^0-9]", "", mobile))
        if res[0] != '0':
            res = '0' + res
        if res[:2] != '09' or len(res) != 11:
            return False
        return res
    except:
        return False


# ><><><><><><><><><><><<><><><><><><><><>--> OTP Validator

def valid_and_create_otp(mobile):
    from users.models import OTP  # This should be imported here.
    otp_waiting = OTP.objects.filter(mobile=mobile, created_at__gte=otp_expired_check())
    if otp_waiting:
        raise exceptions.OTPWaitingException()

    otp = otp_generator()
    OTP.objects.create(mobile=mobile, otp=otp)

    if not settings.SEND_OTP_BY_SMS:
        return otp

    try:
        api = KavenegarAPI(settings.KAVENEGAR_TOKEN)
        params = {
            'receptor': str(mobile),
            'template': 'verify',
            'token': str(otp),
            'type': 'sms'
        }
        response = api.verify_lookup(params)
        # ? TODO: Save  to database if you need.
        return True
    except APIException as e:
        print('\n\n KAVENEGAR**SERVER**ERROR\n', str(e),
              '\nKAVENEGAR**SERVER**ERROR\n\n', flush=True)
        raise exceptions.SMSSendingException()
    except HTTPException as e:
        print('\n\n KAVENEGAR**SERVER**ERROR\n', str(e),
              '\nKAVENEGAR**SERVER**ERROR\n\n', flush=True)
        raise exceptions.SMSSendingException()
    except:
        raise exceptions.SMSSendingException()


# ><><><><><><><><><><><<><><><><><><><><>--> Role Validator

def check_role(user, role):
    try:
        if role in user.role:
            return True
        return False
    except:
        return False


# ><><><><><><><><><><><<><><><><><><><><>--> File Validator


@deconstructible
class FileValidator(object):
    error_messages = {
        'max_size': _("Ensure this file size is not greater than {}."
                      " Your file size is {}."),
        'content_type': _("Files of type {} are not supported.")
    }

    def __init__(self, max_size=None, content_types=()):
        self.max_size = max_size
        self.content_types = content_types

    def __call__(self, data):

        if self.max_size is not None and data.size > self.max_size:
            raise ValidationError(
                self.error_messages['max_size'].format(self.max_size, data.size))

        if self.content_types:
            content_type = magic.from_buffer(data.read(), mime=True)
            data.seek(0)

            if content_type not in self.content_types:
                raise ValidationError(
                    self.error_messages['content_type'].format(content_type))

    def __eq__(self, other):
        return (
            isinstance(other, FileValidator) and
            self.max_size == other.max_size and
            self.content_types == other.content_types
        )
