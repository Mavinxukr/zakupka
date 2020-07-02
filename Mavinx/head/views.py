from django.shortcuts import render
from django.utils import translation
from django.views import View
from django.views.decorators.csrf import csrf_exempt


class MainIndex(View):
    def get(self, request, *args, **kwargs):
        user_language = kwargs.get('lang')
        translation.activate(user_language)
        return render(request, 'site/base.html')


class ClientRequest(View):
    def post(self, request):
        print(request.data)
        return  True









