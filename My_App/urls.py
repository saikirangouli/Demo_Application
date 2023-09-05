from django.urls import path
from .views import *
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(router.urls)),
]
