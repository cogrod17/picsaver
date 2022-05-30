from django.urls import path, include
from .views import ImageView
from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register('', UploadImage, basename='image-upload')

urlpatterns=[
    # path('image/', include(router.urls))
    path('image/', ImageView.as_view(), name='upload-image')
]