from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', views.UserView, basename='users')
urlpatterns=[
     path('', include(router.urls)),
     path('logout', views.LogoutView.as_view(), name='logout')
] 