from rest_framework import serializers
from .models import *

class MarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhoneName
        fields = '__all__'