from django.urls import path, re_path
from . import views


urlpatterns = [
    path('client-request/', views.ClientRequest.as_view()),
    path('client-subscribe/', views.ClientSubscribe.as_view()),
    re_path(r'^(?P<lang>\w{2})/works', views.Works.as_view()),
    re_path(r'^(?P<lang>\w{2})/services', views.Services.as_view()),
    re_path(r'^(?P<lang>\w{2})/company', views.Company.as_view()),
    re_path(r'^(?P<lang>\w{2})/blog', views.Blog.as_view()),
    re_path(r'^(?P<lang>\w{2})/', views.MainIndex.as_view()),
]
