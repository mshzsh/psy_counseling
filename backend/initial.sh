#!/bin/bash
find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
find . -path "*/migrations/*.pyc" -delete
python manage.py makemigrations common community locations users consultations timetable transactions gift_codes magazine --noinput
python manage.py migrate --noinput
python manage.py collectstatic --noinput
python manage.py loaddata ./*/fixtures/*.json
