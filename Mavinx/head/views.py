from django.http import JsonResponse
from django.utils import translation
from django.views import View

from .models import Order, Subscribers
from . shortcuts import render



class MainIndex(View):
    def get(self, request, *args, **kwargs):
        context = {
            'endpoint': '/',
        }
        return render(request, 'site/head/head-page.html', context)


class Works(View):
    def get(self, request, *args, **kwargs):
        context = {
            'endpoint': '/works',
        }
        return render(request,'site/page-header/works.html', context)


class Services(View):
    def get(self, request, *args, **kwargs):
        context = {
            'endpoint': '/services',
        }
        return render(request,'site/page-header/services.html', context)

class Company(View):
    def get(self, request, *args, **kwargs):
        context = {
            'endpoint': '/company',
        }
        return render(request,'site/page-header/company.html', context)


class Blog(View):
    def get(self, request, *args, **kwargs):
        context = {
            'endpoint': '/blog',
        }
        return render(request,'site/page-header/blog.html', context)

