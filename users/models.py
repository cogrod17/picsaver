from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.utils import timezone
from pkg_resources import require
from rest_framework import serializers



# Create your models here
class UserManager(BaseUserManager):
    def create_superuser(self, username, email=None, password=None, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')
        return self.create_user(username, email, password, **other_fields)


    def create_user(self, username, email=None, password=None, **other_fields):
        if not email or not username: 
            raise ValueError('Users must have an email address and username')

        if not password:
            raise ValueError('No password')

        user = self.model(email=self.normalize_email(email), username=username,  **other_fields)
        user.set_password(password)
        user.save(using=self.db)
        return user

    
class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(verbose_name='email', unique=True)
    username = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150, blank=True)
    last_name =  models.CharField(max_length=150, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)
    objects = UserManager()


    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def get_email(self):
        return self.email
    
    def get_username(self):
        return self.username
    