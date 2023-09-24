import os
import re
import json
import jdatetime
from datetime import datetime, timedelta, date
from copy import deepcopy
from django.conf import settings
from timetable.models import AvailableTimes, available_time_schema


def dow_switcher(digit, letter=False):
    switch = {
        0: 2,
        1: 3,
        2: 4,
        3: 5,
        4: 6,
        5: 0,
        6: 1,
    }
    if letter:
        switch = {
            0: 'دوشنبه',
            1: 'سه‌شنبه',
            2: 'چهارشنبه',
            3: 'پنجشنبه',
            4: 'جمعه',
            5: 'شنبه',
            6: 'یکشنبه',
        }
    return switch.get(int(digit), int(digit))


def get_week_day(date):
    date_object = datetime.strptime(date, "%Y-%m-%d")
    weekday_number = date_object.weekday()

    return dow_switcher(weekday_number, True)


def covert_str_date_to_jalali(val):
    res = str(jdatetime.date.fromgregorian(
        year=int(str(val).split('-')[0]),
        month=int(str(val).split('-')[1]),
        day=int(str(val).split('-')[2]),
    ))

    return res.replace('-', '/')


def translator(data, single=False):
    switch = {
        'Saturday': 'شنبه',
        'Sunday': 'یکشنبه',
        'Monday': 'دوشنبه',
        'Tuesday': 'سه‌شنبه',
        'Wednesday': 'چهارشنبه',
        'Thursday': 'پنجشنبه',
        'Friday': 'جمعه',
        '00:00-08:00': '۰۰:۰۰ الی ۰۸:۰۰',
        '08:00-12:00': '۰۸:۰۰ الی ۱۲:۰۰',
        '12:00-16:00': '۱۲:۰۰ الی ۱۶:۰۰',
        '16:00-20:00': '۱۶:۰۰ الی ۲۰:۰۰',
        '20:00-00:00': '۲۰:۰۰ الی ۰۰:۰۰',
        '0': '۰',
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹'
    }

    if not single:
        result = []
        for d in data:
            d['day_name'] = switch.get(d['day_name'], d['day_name'])
            for p in d['timetable']:
                p['time'] = switch.get(p['time'], p['time'])
            result.append(d)

        return result
    else:
        return switch.get(data, data)


def disable_full_chunks(obj, expert):
    for d in obj:
        for t in d['timetable']:
            consultations = expert.consultations.filter(
                # status__in=[2, 3],
                time_id=t['id'],
                consultation_date=d['date']
            ).count()
            if consultations >= settings.CAPACITY_PER_CHUNK:
                t['status'] = False
    return obj


def disable_past_times(obj):
    last_order = timedelta(hours=settings.LAST_ORDER_TO_CLOSE_CHUNK)
    now_time = (datetime.today()+last_order).strftime('%H:%M')

    for time in obj['timetable']:
        t = time['time'].split('-')[1] if '-' in time['time'] else time['time']
        if t < now_time:
            time['status'] = False

    return obj


def enable_available_times(obj, consultation_type, expert, center, final):
    ats = AvailableTimes.objects.filter(expert=expert)

    if not ats.exists():
        return None
    ats = ats.first()

    results = []
    for d in obj:
        obj_clone = deepcopy(d)

        for t in obj_clone['timetable']:
            if str(consultation_type) == 'in_office':
                ats_e = ats.available_time_ids_by_expert.get(
                    str(consultation_type)).get(str(obj_clone['date']), {}).get(str(center))
                ats_s = ats.available_time_ids_by_staff.get(
                    str(consultation_type)).get(str(obj_clone['date']), {}).get(str(center))
            else:
                ats_e = ats.available_time_ids_by_expert.get(
                    str(consultation_type)).get(str(obj_clone['date']))
                ats_s = ats.available_time_ids_by_staff.get(
                    str(consultation_type)).get(str(obj_clone['date']))

            if ats_s or str(consultation_type) == 'online':
                if final:
                    if ats_e:
                        if str(consultation_type) == 'in_office':
                            if t['id'] in ats_e and t['id'] in ats_s:
                                t.update({'status': True})
                        else:
                            if t['id'] in ats_e:
                                t.update({'status': True})

                # For expert panel
                else:
                    if t['id'] in ats_s:
                        t.update({'status': True})

        results.append(obj_clone)

    return results


# consultation_type="online" Or "in_office"
# if final=True, show aps for users. else show aps for expert in dashboard
# Available periods example in database (By staff): {"in_office": {"2023-06-13": {"1": [91, 92, 93], "2": [94, 95]}}, "online": {}}
# Available periods example in database (By expert): {"in_office": {"2023-06-13": {"1": [91, 92, 93], "2": [94, 95]}}, "online": {"2023-06-13": [7, 8]}}
def get_aps(consultation_type,  expert=None, center=None, final=True):

    file_path = os.path.join(settings.BASE_DIR, 'timetable')
    with open(f'{file_path}/{consultation_type}_timetable.json', 'r') as j:
        dow = json.load(j)

    data, today = [], int(dow_switcher((timedelta() + datetime.today()).weekday()))

    for d in dow:
        if int(d['day_number']) == today:
            data.append(d)
            break

    count = data[-1]['day_number'] + 1
    for i in range(0, settings.NUMBER_OF_WEEK_DAYS - 1):
        if count > 6:
            count = 0
        data.append(dow[count].copy())
        count += 1

    count = 0
    for d in data:
        d.update({
            'jalali_date': covert_str_date_to_jalali(timedelta(days=count) + date.today()),
            'date': timedelta(days=count) + date.today()
        })
        count += 1
        for p in d['timetable']:
            p.update({'status': False})

    if expert:
        data = enable_available_times(deepcopy(data), consultation_type, expert, center, final)
        if not data:
            return available_time_schema()
        if final:
            data = disable_full_chunks(deepcopy(data), expert)

    data[0] = disable_past_times(deepcopy(data[0]))

    return translator(data)


def date_time_id_validator(val, consultation_type):
    if str(consultation_type) == 'in_office':
        regex = r'^\d{4}-\d{2}-\d{2}:(1[0-6][0-8]|[1-9][0-9]|[1-9])$'
    else:
        regex = r'^\d{4}-\d{2}-\d{2}:(1[0-4]|[1-9])$'

    return True if re.match(regex, val) else False


def check_expert_availability(expert):
    res = {'online': False, 'in_office': False}
    ex = {"online": {"2023-06-27": [7, 8], "2023-06-30": [10, 12], "2023-06-12": [14, 16]},
          "in_office": {"2023-06-26": {"1": [91, 92, 96], "2": [94, 95]}}}

    staff = {"in_office": {"2023-06-26": {"1": [91, 93], "2": [85, 95]}}}

    today = str(datetime.today().date())

    print('\n----------------\n', today, flush=True)

    for date, _ in ex['online'].items():
        if today <= date:
            res['online'] = True

    for date, _ in ex['in_office'].items():
        if today <= date:
            res['in_office'] = True

    print('\n\n\n', flush=True)
    return res


# dict1 = {"in_office": {"2023-06-26": {"1": [91, 93], "2": [85, 95]},"2023-06-21": {"3": [71, 73,76], "2": [103]}}}
# dict2 = {"in_office": {"2023-06-26": {"1": [91, 93,99], "2": [86, 95,89]},"2023-06-25": {"3": [71,76], "2": [21]}}}


def time_id_to_time(time_id):
    file_path = os.path.join(settings.BASE_DIR, 'timetable')
    with open(f'{file_path}/in_office_timetable.json', 'r') as j:
        dow = json.load(j)

    for i in dow:
        for j in i['timetable']:
            if str(j['id']) == str(time_id):
                return j['time']
    return ""
