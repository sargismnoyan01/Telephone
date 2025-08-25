from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet


@api_view(['GET'])
def markapi(request):
    querset = PhoneName.objects.all()
    serialzer_class = MarkSerializer(querset, many = True)


    return Response(data=serialzer_class.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def productapi(request):
    querset = Product.objects.all()
    serializer=ProductSerializer(querset, many = True)

    return Response(data=serializer.data,status=status.HTTP_200_OK)

@api_view(['GET','POST'])
def Registerapi(request):
    if request.method == 'GET':
        return Response(data={'message': 'this is registerapi'},status=status.HTTP_200_OK)
    if request.method == 'POST':
        serializer= RegisterSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self,request):
        username=request.data.get('username')
        password=request.data.get('password')

        print(username,password)
        user=authenticate(username=username,password=password)
        if user is not None:
            token,created=Token.objects.get_or_create(user=user)
            return Response({'token':token.key},status=status.HTTP_200_OK)
        else:
            return Response({'error':'invaalidusername or password'},status=status.HTTP_404_NOT_FOUND)
        

class MeView(APIView):
    permission_classes=[IsAuthenticated]
    
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    
        
class LogoutView(APIView):
    persmission_classes=[IsAuthenticated]
   
    def post(self,request):
        request.user.auth_token.delete()
        return Response(data={'message':'logout'},status=status.HTTP_200_OK)


@api_view(['GET'])
def Markditail(request,id):
    querset=PhoneName.objects.filter(id=id)
    if not querset.exists():
        return Response({'error': 'not eror'},status=status.HTTP_404_NOT_FOUND)
    
    serializer=MarkSerializer(querset.first())
    return Response(serializer.data,status=status.HTTP_200_OK)

class PhoneViewset(ModelViewSet):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer

@api_view(['POST'])
def Subjectapi(request):
    if request.method == 'POST':
        serialzer=SubjectModelSerializer(data=request.data)
        if serialzer.is_valid():
            serialzer.save()
            return Response(data={'message': 'sucsess'},status=status.HTTP_201_CREATED)
    else:
        return Response(data={'errors': 'is not valid'},status=status.HTTP_400_BAD_REQUEST)