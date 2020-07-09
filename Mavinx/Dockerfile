FROM python:3
ENV PYTHONUNBUFFERED 1
RUN apt-get update -y && apt-get install -y gettext
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
RUN django-admin compilemessages
RUN python manage.py collectstatic --noinput
RUN python manage.py makemigrations
RUN python manage.py migrate
RUN /bin/bash load_head_fixtures.sh