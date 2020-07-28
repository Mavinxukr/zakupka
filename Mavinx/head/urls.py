from django.urls import path, re_path
from . import views


urlpatterns = [
    path('works', views.Works.as_view(), name='works'),
    path('services', views.Services.as_view(),name='services'),
    path('company', views.Company.as_view(), name='company'),
    re_path('blog', views.Blog.as_view(),name='blog'),
    re_path('works/(?P<project_id>\d+)?', views.OneProject.as_view(), name='one_project'),
    path('', views.Index.as_view(), name='index'),
]

