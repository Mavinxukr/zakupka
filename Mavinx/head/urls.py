from django.urls import path
from . import views


urlpatterns = [
    path('<lang>/', views.MainIndex.as_view()),
    path('client-request/', views.ClientRequest.as_view(), name='client-request')
]
