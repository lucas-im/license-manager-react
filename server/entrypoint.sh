#!/bin/sh
python manage.py migrate
python manage.py runserver --noreload 0.0.0.0:8000
