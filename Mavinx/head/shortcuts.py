from django.shortcuts import render as main_render
from django.utils import translation

from . models import Area, Contact


def render(request, template, context):
    lang =  request.resolver_match.kwargs.get('lang')
    translation.activate(lang)
    context['areas'] =  Area.objects.all()
    context['contact'] = Contact.objects.first()
    context['lang'] = lang
    return main_render(request, template, context)
