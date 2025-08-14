from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class MarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhoneName
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['id',
            'phone_name',    
            'phone_name_id',  
            'model_name',
            'storage',
            'color',
            'release_date',
            'price',
            'in_stock',]
    
class RegisterSerializers(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True)
    class Meta:
        model=CustomUser
        fields=['username','email','password']

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'])
        return user
