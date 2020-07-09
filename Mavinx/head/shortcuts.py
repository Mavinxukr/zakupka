from django.shortcuts import render as main_render
from django.utils import translation

from .models import Area, Contact, Project, Review, Blog


def render(request, template, context):
    lang =  request.resolver_match.kwargs.get('lang')
    translation.activate(lang)
    context['areas'] =  Area.objects.all()
    context['contact'] = Contact.objects.first()
    context['lang'] = lang
    context['projects'] = Project.objects.all()
    context['reviews'] = Review.objects.all()
    context['blogs'] = Blog.objects.all()
    return main_render(request, template, context)
