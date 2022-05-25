from django.contrib.auth.hashers import make_password
from requests import get
from rest_framework import serializers 
from django.contrib.auth import get_user_model

User = get_user_model()

# class PasswordSerializer(serializers.ModelSerializer):
#     class Meta:



class UserSerializer(serializers.ModelSerializer):
      email = serializers.EmailField(required=True)
      username = serializers.CharField(required=True)
    #   password = serializers.CharField(min_length=8, write_only=True)

      class Meta:
        model= User
        fields=('email', 'username' ,'first_name', 'last_name', 'password', 'is_superuser', 'id')
        extra_kwargs = {"password": {'write_only': True}, 'first_name': {'required': False}, 'last_name': {'required': False}}

      def create(self, validated_data):
         user = User.objects.create_user(**validated_data)
         return user
        

class UpdateUserSerializer(UserSerializer):
    class Meta: 
        model = User
        exclude = ['password', 'date_joined', 'is_superuser', 'last_login', 'is_staff', 'is_active']
        extra_kwargs = {"password": {'write_only': True}, 'first_name': {'required': False}, 'last_name': {'required': False}}

class ResetPasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    class Meta: 
        model = User
