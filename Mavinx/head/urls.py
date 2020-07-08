from django.urls import path, re_path
from . import views


urlpatterns = [
    path('works', views.Works.as_view()),
    path('services', views.Services.as_view()),
    path('company', views.Company.as_view()),
    path('blog', views.Blog.as_view()),
    path('', views.MainIndex.as_view()),
]
