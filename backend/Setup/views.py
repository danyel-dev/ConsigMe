from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework import permissions
from .serializers import CreateUserSerializer


class CreateUser(generics.CreateAPIView):
    model = User
    serializer_class = CreateUserSerializer
    permission_classes = [permissions.AllowAny]
