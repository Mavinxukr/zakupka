from django.shortcuts import render
from django.utils import translation

from . models import Blog


def index(request, *args, **kwargs):
    user_language = kwargs.get('lang')
    translation.activate(user_language)
    return render(request, 'site/base.html')
