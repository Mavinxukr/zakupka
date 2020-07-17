from django.core.mail import send_mail
from django.http import JsonResponse
from django.views import View
from mavinx.settings import base

from head.models import Order, Subscribers


class ClientRequest(View):
    def post(self, request , *args, **kwargs):
        data = request.POST.dict().copy()
        del data['csrfmiddlewaretoken']
        file = request.FILES.get('file')
        arias_id = data.pop('areas_id')
        order =  Order.objects.create(**data)
        for area_id in arias_id.split(','):
            order.area.add(area_id)
        order.file = file
        order.save()
        response = {
            'message': 'Ваш запрос был отправлен',
            'data': data
        }
        subject = '⏩📩😳🔥 Поступил новый запрос с вашего сайта 🔥😳📩⏪'
        message = 'Быстро гони 🚀 в админку 👔, там есть новый заказ 😜 \n' \
                  'Не забываем 👺 менять статус запроса 😴 в админке 🙏' \
                  'Твой Django ✊❤😎'
        email_from = base.EMAIL_HOST_USER
        recipient_list = ['mavinx.office@gmail.com', ]
        send_mail(subject, message, email_from, recipient_list)
        return JsonResponse(response, status=200)


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
