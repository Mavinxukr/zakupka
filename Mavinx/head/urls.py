from django.urls import path, re_path
from . import views


urlpatterns = [
    path('works', views.Works.as_view(), name='works'),
    path('services', views.Services.as_view(),name='services'),
    path('company', views.Company.as_view(), name='company'),
    path('blog', views.Blog.as_view(),name='blog'),
    path('', views.Index.as_view(), name='index'),
]
