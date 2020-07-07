from django.http import JsonResponse
from django.shortcuts import render
from django.utils import translation
from django.views import View

from .models import Order, Subscribers, Area


class MainIndex(View):
    def get(self, request, *args, **kwargs):
        user_language = kwargs.get('lang')
        translation.activate(user_language)
        context = {
            'areas' : Area.objects.all(),
            'lang': user_language,
            'endpoint': '/',
        }
        return render(request, 'site/base.html', context)

class Works(View):
    def get(self, request, *args, **kwargs):
        user_language = kwargs.get('lang')
        translation.activate(user_language)
        context = {
            'lang': user_language,
            'endpoint': '/works/'
        }
        return render(request,'site/page-header/works.html', context)


class Services(View):
    def get(self, request, *args, **kwargs):
        user_language = kwargs.get('lang')
        translation.activate(user_language)
        context = {
            'lang': user_language,
            'endpoint': '/services/'
        }
        return render(request,'site/page-header/services.html', context)

class Company(View):
    def get(self, request, *args, **kwargs):
        user_language = kwargs.get('lang')
        translation.activate(user_language)
        context = {
            'lang': user_language,
            'endpoint': '/company/'
        }
        return render(request,'site/page-header/company.html', context)


class Blog(View):
    def get(self, request, *args, **kwargs):
        user_language = kwargs.get('lang')
        translation.activate(user_language)
        context = {
            'lang': user_language,
            'endpoint': '/blog/'
        }
        return render(request,'site/page-header/blog.html', context)


class ClientRequest(View):
    def post(self, request , *args, **kwargs):
        data = request.POST.copy()
        del data['csrfmiddlewaretoken']
        file = request.FILES.get('file')
        if file:
            data['file'] = file
        Order.objects.create(**data)
        response = {
            'message': 'Ваш запрос был отправлен',
            'data': data
        }
        return JsonResponse(response, status=201)


class ClientSubscribe(View):
    def post(self, request , *args, **kwargs):
        email = request.POST.get('email')
        client = Subscribers.objects.filter(email=email)
        response = {
            'message': 'Вы уже подписаны на рассылку',
        }
        if not client:
            Subscribers.objects.create(email=email)
            response = {
                'message': 'Вы успешно подписались на рассылку',
            }
        return JsonResponse(response, status=200)


