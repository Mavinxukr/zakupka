from .base import *

DEBUG = True
SECRET_KEY = 'p!m^3jokr&bebebepi@ssa@ujq8uk&vum@majq-@v&t_01y&%m'
CURRENT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
separator = '/'
BASE_DIR = separator.join(CURRENT_DIR.split('/')[:-1])

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'db.sqlite3',
    }
}

STATIC_URL = '/static/'
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
LOCALE_PATHS = (os.path.join(BASE_DIR, 'locale'),)

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')]
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]



