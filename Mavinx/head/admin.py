from django.db import models
from django.contrib import admin
from django.contrib.admin import TabularInline
from django.utils.safestring import mark_safe
from parler.admin import TranslatableAdmin, TranslatableTabularInline


from quilljs.admin import QuillAdmin

from .models import Company, Customer, \
    Area, Project, Blog, Review, Contact, About, Order, \
    ProjectNumberImages, Subscribers, Topic, Technology, TechnologyUsing, \
    ProjectSector, ProjectChallenges, ProjectSliderImages, BlogCaseImages, BlogWriter



class BlogCaseImagesInline(TranslatableTabularInline):
    model = BlogCaseImages


class ProjectChallengesInline(TranslatableTabularInline):
    model = ProjectChallenges


class ProjectNumberImagesInline(TranslatableTabularInline):
    model = ProjectNumberImages


class ProjectSliderImagesInline(TabularInline):
    model = ProjectSliderImages


@admin.register(Blog)
class BlogAdmin(TranslatableAdmin, QuillAdmin):

    list_per_page = 10
    list_display = ('name', 'topic', 'date_publish', '_image', 'views')
    list_filter = ('translations__name', 'topic', 'date_publish', 'views')
    search_fields = ('translations__name', 'date_publish', 'topic__translations__name', 'views')
    inlines = (BlogCaseImagesInline,)


    def _image(self, obj):
        image_path = '/media/{}'.format(obj.image)
        return mark_safe(
            "<img src='{}' width='40' height='25' alt='img' >".format(image_path)
        )


@admin.register(Topic)
class TopicAdmin(TranslatableAdmin):
    list_display = ('name',)


@admin.register(BlogWriter)
class BlogWriterAdmin(TranslatableAdmin):
    list_display = ('name','_image')

    def _image(self, obj):
        image_path = '/media/{}'.format(obj.image)
        return mark_safe(
            "<img src='{}' width='40' height='25' alt='img' >".format(image_path)
        )


@admin.register(Company)
class CompanyAdmin(TranslatableAdmin):
    list_display = ('id', 'name', '_logo')
    list_filter = ('translations__name',)
    search_fields = ('translations__name',)

    def _logo(self, obj):
        image_path = '/media/{}'.format(obj.logo)
        return mark_safe(
            "<img src='{}' width='40' height='25' alt='img' >".format(image_path)
        )


@admin.register(Area)
class AreaAdmin(TranslatableAdmin):
    list_display = ('id', 'name')
    list_filter = ('translations__name',)
    search_fields = ('translations__name',)




@admin.register(ProjectSector)
class ProjectSectorAdmin(TranslatableAdmin):
    list_display = ('id', 'name')


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_filter = ('name',)
    search_fields = ('name',)


@admin.register(TechnologyUsing)
class TechnologyUsingAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'technology')
    list_filter = ('name', 'technology')
    search_fields = ('name', 'technology')


@admin.register(Customer)
class CustomerAdmin(TranslatableAdmin):
    model = Customer
    list_display = ('id', 'name', 'description', 'company', '_image')
    list_filter = ('translations__name', 'company__translations__name')
    search_fields = ('translations__name', 'company__translations__name')

    def _image(self, obj):
        image_path = '/media/{}'.format(obj.image)
        return mark_safe(
            "<img src='{}' width='40' height='25' alt='img' >".format(image_path)
        )


@admin.register(Project)
class ProjectAdmin(TranslatableAdmin):
    list_per_page = 10
    inlines = (ProjectNumberImagesInline, ProjectChallengesInline, ProjectSliderImagesInline)
    list_display = ('name', 'priority', 'company')
    list_filter = ('translations__name', 'priority', 'company__translations__name', 'area')
    search_fields = ('translations__name', 'priority', 'company__translations__name')


@admin.register(Review)
class ReviewAdmin(TranslatableAdmin):
    list_display = ('name', 'customer', 'project')
    list_filter = ('translations__name', 'project__translations__name', 'customer__translations__name')
    search_fields = ('translations__name', 'project__translations__name', 'customer__translations__name')


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    model = Contact
    list_display = ('email', 'phone')


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_per_page = 10
    list_display = ('name', 'email', 'phone', 'terms', 'budget', 'status')
    readonly_fields = ('name', 'email', 'phone', 'terms', 'budget', 'file', 'detail', 'area', 'date')
    list_filter = ('name', 'email', 'terms', 'budget', 'phone', 'status', 'date')
    search_fields = ('name', 'email', 'terms', 'budget', 'phone', 'date')

    def has_add_permission(self, request, obj=None):
        return False


@admin.register(About)
class AboutAdmin(TranslatableAdmin):
    list_display = ('text', '_image')

    def _image(self, obj):
        image_path = '/media/{}'.format(obj.image)
        return mark_safe(
            "<img src='{}' width='40' height='25' alt='img' >".format(image_path)
        )


@admin.register(Subscribers)
class SubscribersAdmin(admin.ModelAdmin):
    list_display = ('email',)
    readonly_fields = ('email',)
    list_per_page = 10
    list_filter = ('email',)
    search_fields = ('email',)

    def has_add_permission(self, request, obj=None):
        return False


