from django.http import JsonResponse
from django.shortcuts import render
from django.utils import translation
from django.views import View

from .models import Order, Subscribers, Project


class MainIndex(View):
    def get(self, request, *args, **kwargs):
        user_language = kwargs.get('lang')
        translation.activate(user_language)
        context = {
            'projects': Project.objects.all(),
        }
        return render(request, 'site/base.html', context)


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
        Subscribers.objects.create(email=request.POST.get('email'))
        response = {
            'message': 'Вы успешно подписались на рассылку',
        }
        return JsonResponse(response, status=201)
