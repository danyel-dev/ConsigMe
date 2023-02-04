from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import serializers


class CreateUserSerializer(serializers.ModelSerializer): 
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password']
    

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super(CreateUserSerializer, self).create(validated_data)
