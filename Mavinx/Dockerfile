FROM python:3
ENV PYTHONUNBUFFERED 1
RUN apt-get update -y && apt-get install -y gettext
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/