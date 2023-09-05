from django.urls import path
from .views import *
from django.contrib import admin
from django.urls import path, include
from .views import UserList, UserDetail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', UserList.as_view()),
    path('api/users/<int:pk>/', UserDetail.as_view()),
]
