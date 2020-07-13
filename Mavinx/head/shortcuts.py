from django.shortcuts import render as main_render
from django.utils import translation

from .models import Area, Contact, Project, Review, Blog


def render(request, template, context):
    context['areas'] =  Area.objects.all()
    context['contact'] = Contact.objects.first()
    context['reviews'] = Review.objects.all().order_by('-id')
    context['blogs'] = Blog.objects.all()
    context['projects'] = Project.objects.all().order_by('-priority')
    context['projects_ios'] = Project.objects.filter(area__translations__name__contains='iOS').order_by('-priority').distinct()
    context['projects_android'] = Project.objects.filter(area__translations__name__contains='Android').order_by('-priority').distinct()
    context['projects_web'] = Project.objects.filter(area__translations__name__contains='Web').order_by('-priority').distinct()
    context['projects_ux_ui'] = Project.objects.filter(area__translations__name__contains='UI/UX').order_by('-priority').distinct()
    return main_render(request, template, context)
