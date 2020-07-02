#!/bin/bash
python manage.py loaddata head/fixtures/Order.json;
python manage.py loaddata head/fixtures/Admin.json;
