from random import randint

from django.core.paginator import Paginator
from django.db.models.functions import Lower
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
            data = Project.objects.filter(area__translations__name__contains='iOS')
        elif 'Android' == area:
            data = Project.objects.filter(area__translations__name__contains='Android')
        elif 'Web' == area:
            data = Project.objects.filter(area__translations__name__contains='Web')
        elif 'UI/UX' == area:
            data = Project.objects.filter(area__translations__name__contains='UI/UX')
        else:
            data = Project.objects.all()

        paginator = Paginator(data.order_by('-priority').distinct(), 6)
        page_number = request.GET.get('page')
        data = paginator.get_page(page_number)
        areas = Area.objects.order_by(Lower('translations__name')).distinct()
        context['data'] = data
        context['areas'] = areas
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


class OneProject(View):
    def get(self, request, project_id):
        print(request.path)
        context = {}
        project = Project.objects.filter(id=project_id).first()
        context['project'] = project
        context['technology_parent'] = [str(tech.technology) for tech in project.technology_use.all()]
        context['technology'] = [str(name) for name in project.technology_use.all()]
        context['next_project'] = Project.objects.all()[randint(0, Project.objects.count() - 1)]
        return render(request, 'site/sub-page/one-project.html', context=context)
