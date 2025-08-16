from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
from colorfield.fields import ColorField


class CustomUser(AbstractUser):
    phone = PhoneNumberField('phone',max_length=16,blank=True)
    image = models.ImageField(upload_to="profile_images/", null=True)



class PhoneName(models.Model):
    name = models.CharField('Phone Mark',max_length=100)
    image = models.ImageField(upload_to="marks_images/", null=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Phone mark'
        verbose_name_plural = 'Phone marks'

class Product(models.Model):
    phone_name=models.ForeignKey(PhoneName,on_delete=models.CASCADE)
    model_name=models.CharField('model_name',max_length=100)
    storage=models.IntegerField()
    color = ColorField(default='#000000')
    release_date=models.DateField()
    price=models.IntegerField()
    in_stock=models.BooleanField(default=True)

    def __str__(self):
        return self.model_name
    
    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
    

