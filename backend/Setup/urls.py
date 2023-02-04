from django.contrib import admin
from django.urls import path
from .views import CreateUser


urlpatterns = [
    path('register/', CreateUser.as_view()),
    path('admin/', admin.site.urls),
]
