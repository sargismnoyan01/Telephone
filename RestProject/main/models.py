from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField


class CustomUser(AbstractUser):
    phone = PhoneNumberField('phone',max_length=16,blank=True)



class PhoneName(models.Model):
    name = models.CharField('Phone Mark')


    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Phone mark'
        verbose_name_plural = 'Phone marks'
