from django.db import models
from django.conf import settings
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

User = get_user_model()

def upload_to(instance, filename):
    return f'image/{filename}'

class Image(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='image')
    image = models.ImageField(_('image'), upload_to=upload_to)
    date_uploaded = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return self.image.name

