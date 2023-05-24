from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from .views import UserViewSet, GroupViewSet
from rest_framework.authtoken import views


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token, name='api-tokn-auth'),
    path('admin/', admin.site.urls),
]
