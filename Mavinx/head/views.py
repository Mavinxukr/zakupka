from django.http import JsonResponse
from django.shortcuts import render
from django.utils import translation
from django.views import View

from .models import Order, Subscribers, Area, Contact




class MainIndex(View):
    def get(self, request, *args, **kwargs):
        user_language = kwargs.get('lang')
        translation.activate(user_language)
        context = {
            'areas' : Area.objects.all(),
            'lang': user_language,
            'about': Contact.objects.first(),
            'endpoint': '/',
        }
        return render(request, 'site/base.html', context)

class Works(View):
    def get(self, request, *args, **kwargs):
        user_language = kwargs.get('lang')
        translation.activate(user_language)

        context = {
             'areas' : Area.objects.all(),
            'lang': user_language,
            'about': Contact.objects.first(),
            'endpoint': '/works/'
        }
        return render(request,'site/page-header/works.html', context)


class Services(View):
    def get(self, request, *args, **kwargs):
        user_language = kwargs.get('lang')
        translation.activate(user_language)
        context = {
            'areas' : Area.objects.all(),
            'lang': user_language,
            'about': Contact.objects.first(),
            'endpoint': '/services/'
        }
        return render(request,'site/page-header/services.html', context)

class Company(View):
    def get(self, request, *args, **kwargs):
        user_language = kwargs.get('lang')
        translation.activate(user_language)
        context = {
            'areas' : Area.objects.all(),
            'lang': user_language,
            'about': Contact.objects.first(),
            'endpoint': '/company/'
        }
        return render(request,'site/page-header/company.html', context)


class Blog(View):
    def get(self, request, *args, **kwargs):
        user_language = kwargs.get('lang')
        translation.activate(user_language)
        context = {
            'areas' : Area.objects.all(),
            'lang': user_language,
            'about': Contact.objects.first(),
            'endpoint': '/blog/'
        }
        return render(request,'site/page-header/blog.html', context)


class ClientRequest(View):
    def post(self, request , *args, **kwargs):
        data = request.POST.copy()
        del data['csrfmiddlewaretoken']
        file = request.FILES.get('file')

        Order.objects.create(
            area_id=data['area_id'],
            email=data['email'],
            phone=data['phone'],
            name=data['name'],
            terms=data['terms'],
            budget=data['budget'],
            detail=data['detail'],
            file=file
        )
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


