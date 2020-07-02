FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
RUN django-admin compilemessages
RUN python manage.py collectstatic
RUN python manage.py migrate
COPY . /code/
