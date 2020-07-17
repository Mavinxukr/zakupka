from .base import *

DEBUG = True

SECRET_KEY = 'p!m^3jokr&bebebepi@ssa@ujq8uk&vum@majq-@v&t_01y&%m'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('POSTGRES_DB'),
        'USER': os.getenv('DB_USER'),
        'PASSWORD': os.getenv('DB_PASS'),
        'HOST': 'mavinxStoreDB',
        'PORT': os.getenv('DB_POST',5432),
    }
}



