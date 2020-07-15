from django.core.paginator import Paginator
from django.views import View

from .models import Project
from . shortcuts import render


class Index(View):
    def get(self, request):
        return render(request, 'site/head/head-page.html', context={})


class Works(View):
    def get(self, request):
        projects = Project.objects.all()
        paginator = Paginator(projects,2)
        page_number = request.GET.get('page')
        page_obj = paginator.get_page(page_number)

        return render(request,'site/page-header/works.html', {'page_obj': page_obj})


class Services(View):
    def get(self, request):
        return render(request,'site/page-header/services.html', context={})

class Company(View):
    def get(self, request):
        return render(request,'site/page-header/company.html', context={})


class Blog(View):
    def get(self, request):
        return render(request,'site/page-header/blog.html', context={})

