from django.http import JsonResponse
from django.views import View

from head.models import Order, Subscribers


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

