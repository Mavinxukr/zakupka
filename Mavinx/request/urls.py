from django.urls import path

from . import views


urlpatterns = [
    path('client-request/', views.ClientRequest.as_view()),
    path('client-subscribe/', views.ClientSubscribe.as_view())
]

