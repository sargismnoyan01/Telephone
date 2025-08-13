from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

from .models import *
from .serializers import *


@api_view(['GET'])
def markapi(request):
    querset = PhoneName.objects.all()
    serialzer_class = MarkSerializer(querset, many = True)


    return Response(data = {'mark':serialzer_class.data},status=status.HTTP_200_OK)

@api_view(['GET'])
def productapi(request):
    querset = Product.objects.all()
    serializer=ProductSerializer(querset, many = True)

    return Response(data={'messages':serializer.data},status=status.HTTP_200_OK)


