from django.db.models.functions import Lower
from django.shortcuts import render as main_render

from .models import Area, Contact, Project, Review, Blog


def render(request, template, context):
    context['areas'] =  Area.objects.order_by(Lower('translations__name')).distinct()
    context['contact'] = Contact.objects.first()
    context['reviews'] = Review.objects.all().order_by('-id')
    context['blogs'] = Blog.objects.all()
    context['data'] = Project.objects.all().order_by('priority')[:5]
    context['projects_ios'] = Project.objects.filter(area__translations__name__contains='iOS').order_by('priority').distinct()[:5]
    context['projects_android'] = Project.objects.filter(area__translations__name__contains='Android').order_by('priority').distinct()[:5]
    context['projects_web'] = Project.objects.filter(area__translations__name__contains='Web').order_by('priority').distinct()[:5]
    return main_render(request, template, context)
