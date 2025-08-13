from rest_framework import serializers
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