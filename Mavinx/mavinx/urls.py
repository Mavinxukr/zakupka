from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from . settings import base as setting

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('head.urls')),
]

urlpatterns += static(setting.MEDIA_URL, document_root=setting.MEDIA_ROOT)
urlpatterns += static(setting.STATIC_URL, document_root=setting.STATIC_ROOT)



admin.site.site_header = setting.ADMIN_SITE_HEADER
admin.site.index_title = setting.ADMIN_SITE_TITLE
