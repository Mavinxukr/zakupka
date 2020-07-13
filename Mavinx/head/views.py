from django.views import View

from . shortcuts import render


class Index(View):
    def get(self, request):
        return render(request, 'site/head/head-page.html', context={})


class Works(View):
    def get(self, request):
        return render(request,'site/page-header/works.html', context={})


class Services(View):
    def get(self, request):
        return render(request,'site/page-header/services.html', context={})

class Company(View):
    def get(self, request):
        return render(request,'site/page-header/company.html', context={})


class Blog(View):
    def get(self, request):
        return render(request,'site/page-header/blog.html', context={})

