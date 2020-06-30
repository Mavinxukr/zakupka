from django.shortcuts import render

from . models import Blog


def index(request, *args, **kwargs):
    blog = Blog.objects.language(kwargs.get('lang')).first()
    return render(request, 'head/partials/app.html', {'blog': blog})

