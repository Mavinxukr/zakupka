from django.core.paginator import Paginator
from django.db.models.functions import Lower
from django.views import View
from django.shortcuts import render

from .models import Project, Area, About, Topic, Blog as ModelBlog
from .shortcuts import render as custom_render


class Index(View):
    def get(self, request):
        return custom_render(request, 'site/head/head-page.html', context={})


class Works(View):
    def get(self, request):
        context = {}
        area = request.GET.get('entity') if request.GET.get('entity') else None
        data = Project.objects.filter(area__translations__name__contains=area) if area else \
            Project.objects.all()
        paginator = Paginator(data.order_by('-priority').distinct(), 6)
        page_number = request.GET.get('page')
        data = paginator.get_page(page_number)
        areas = Area.objects.order_by(Lower('translations__name')).distinct()
        context['data'] = data
        context['areas'] = areas
        context['entity'] = area

        return render(request, 'site/page-header/works.html', context)


class Services(View):
    def get(self, request):
        return custom_render(request, 'site/page-header/services.html', context={})


class Company(View):
    def get(self, request):
        context = {}
        context['about'] = About.objects.first()
        context['all_projects'] = Project.objects.all()
        return custom_render(request, 'site/page-header/company.html', context=context)


class Blog(View):
    def get(self, request):
        context = {}
        topic = request.GET.get('entity') if request.GET.get('entity') else None
        data = ModelBlog.objects.filter(topic__translations__name__contains=topic) if topic \
            else ModelBlog.objects.all()
        paginator = Paginator(data.order_by('-id').distinct(), 8)
        page_number = request.GET.get('page')
        data = paginator.get_page(page_number)
        context['topics'] = Topic.objects.order_by(Lower('translations__name')).distinct()
        context['data'] = data
        context['entity'] = topic
        return render(request, 'site/page-header/blog.html', context=context)


class OneProject(View):
    def get(self, request, project_id):
        context = {}
        project = Project.objects.filter(id=project_id).first()
        context['project'] = project
        context['technology_parent'] = [str(tech.technology) for tech in project.technology_use.all()]
        context['technology'] = [str(name) for name in project.technology_use.all()]
        context['next_project'] = Project.objects.all()[randint(0, Project.objects.count() - 1)]
        return render(request, 'site/sub-page/one-project.html', context=context)

class OneBlog(View):
    def get(self, request, blog_id):
        context = {}
        blog = ModelBlog.objects.filter(id=blog_id).first()
        context['blog'] = blog
        context['rand_blogs'] = ModelBlog.objects.exclude(id=blog_id).order_by('?')[:3]
        return render(request, 'site/sub-page/one-blog.html', context=context)


class ErrorHandler():
    def handler404(request, exception):
        return render(request, "site/partials/404.html", status=404)


class Page404(View):
    def get(self, request):
        return render(request, 'site/partials/404.html',context={})
