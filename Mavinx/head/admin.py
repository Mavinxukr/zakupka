from django.contrib import admin
from django.utils.safestring import mark_safe
from parler.admin import TranslatableAdmin

from .models import Company, Customer, \
    Area, Project, Blog, Review, Contact, About, Order, \
    ProjectImage, AboutImage, Subscribers, Topic


@admin.register(Blog)
class BlogAdmin(TranslatableAdmin):
    list_per_page = 10
    list_display = ('name', 'description', 'topic', 'date_publish', '_image', 'views')
    list_filter = ('translations__name', 'topic', 'date_publish', 'views')
    search_fields = ('translations__name', 'date_publish', 'topic__translations__name','views')

    def _image(self, obj):
        image_path = 'http://127.0.0.1:8000/media/{}'.format(obj.image)
        return mark_safe(
            "<img src='{}' width='40' height='25' alt='img' >".format(image_path)
        )

@admin.register(Topic)
class TopicAdmin(TranslatableAdmin):
    list_display = ('name',)



@admin.register(Company)
class CompanyAdmin(TranslatableAdmin):
    list_display = ('id', 'name', '_logo')
    list_filter = ('translations__name',)
    search_fields = ('translations__name',)

    def _logo(self, obj):
        image_path = 'http://127.0.0.1:8000/media/{}'.format(obj.logo)
        return mark_safe(
            "<img src='{}' width='40' height='25' alt='img' >".format(image_path)
        )

@admin.register(Area)
class AreaAdmin(TranslatableAdmin):
    list_display = ('id', 'name')
    list_filter = ('translations__name', )
    search_fields = ('translations__name',)


@admin.register(Customer)
class CustomerAdmin(TranslatableAdmin):
    model = Customer
    list_display = ('id', 'name', 'description', 'company', '_image')
    list_filter = ('translations__name', 'company__translations__name')
    search_fields = ('translations__name','company__translations__name')

    def _image(self, obj):
        image_path = 'http://127.0.0.1:8000/media/{}'.format(obj.image)
        return mark_safe(
            "<img src='{}' width='40' height='25' alt='img' >".format(image_path)
        )

class ProjectImagesInline(admin.TabularInline):
    model = ProjectImage


@admin.register(Project)
class ProjectAdmin(TranslatableAdmin):
    model = Project
    list_per_page = 10
    inlines = (ProjectImagesInline,)
    list_display = ('name',  'priority', 'company')
    list_filter = ('translations__name', 'priority', 'company__translations__name')
    search_fields = ('translations__name', 'priority', 'company__translations__name')


@admin.register(Review)
class ReviewAdmin(TranslatableAdmin):
    list_display = ('name', 'customer', 'project')
    list_filter = ('translations__name','project__translations__name','customer__translations__name')
    search_fields = ('translations__name', 'project__translations__name','customer__translations__name')


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    model = Contact
    list_display = ('email', 'phone')


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    model = Order
    list_per_page = 10
    list_display = ('name','email', 'phone', 'terms', 'budget', 'status',)
    readonly_fields = ('name','email', 'phone', 'terms', 'budget', 'file', 'detail')
    list_filter = ('name' ,'email', 'terms', 'budget', 'phone', 'status')
    search_fields = ('name','email', 'terms', 'budget', 'phone')

    def has_add_permission(self, request, obj=None):
        return False


class AboutImagesInline(admin.TabularInline):
    model = AboutImage


@admin.register(About)
class AboutAdmin(TranslatableAdmin):
    list_display = ('name', 'text')
    inlines = (AboutImagesInline,)


@admin.register(Subscribers)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('email',)
    readonly_fields = ('email',)
    list_per_page = 10
    list_filter = ('email',)
    search_fields = ('email',)

    def has_add_permission(self, request, obj=None):
        return False

