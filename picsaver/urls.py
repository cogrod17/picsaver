from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('pic_saver.urls')),
    path('users/', include('users.urls')),
    path('auth/', include('authentication.urls') ),
    path('', include_docs_urls(title='API')),
    
]

#lets us work with the media folder
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)