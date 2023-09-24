#!/bin/bash
mkdir ../static -p
python manage.py makemigrations common community locations users consultations timetable transactions gift_codes magazine financial --noinput
python manage.py migrate --noinput

if [[ "$PRODUCTION" == "True" ]]; then
    gunicorn --bind :8095 --workers=2 --threads=2 --worker-class=sync goodmood.wsgi:application
else
    python manage.py runserver goodmood-app:8095
fi
