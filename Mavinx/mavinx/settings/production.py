from .base import *

DEBUG = True

SECRET_KEY = os.getenv('SECRET_KEY')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mavinx_store',
        'USER': os.getenv('DB_USER'),
        'PASSWORD': os.getenv('DB_PASS'),
        'HOST': 'mavinxStoreDB',
        'PORT': os.getenv('DB_PORT'),
    }
}



