from django.core.paginator import Paginator
from django.views import View
from django.shortcuts import render

from .models import Project, Area
from . shortcuts import render as custom_render


class Index(View):
    def get(self, request):
        return custom_render(request, 'site/head/head-page.html', context={})


class Works(View):
    def get(self, request):
        context = {}
        area =  request.GET.get('area') if request.GET.get('area') else None

        if 'iOS' == area:
            projects = Project.objects.filter(area__translations__name__contains='iOS')
        elif 'Android' == area:
            projects = Project.objects.filter(area__translations__name__contains='Android')
        elif 'Web' == area:
            projects = Project.objects.filter(area__translations__name__contains='Web')
        elif 'UI/UX' == area:
            projects = Project.objects.filter(area__translations__name__contains='UI/UX')
        else:
            projects = Project.objects.all()

        paginator = Paginator(projects.order_by('-priority').distinct(), 2)
        page_number = request.GET.get('page')
        projects = paginator.get_page(page_number)
        areas = Area.objects.all()
        context['projects'] = projects
        context['areas'] =  areas
        context['area'] = area

        return render(request,'site/page-header/works.html', context)


class Services(View):
    def get(self, request):
        return custom_render(request,'site/page-header/services.html', context={})

class Company(View):
    def get(self, request):
        return custom_render(request,'site/page-header/company.html', context={})


class Blog(View):
    def get(self, request):
        return custom_render(request,'site/page-header/blog.html', context={})

