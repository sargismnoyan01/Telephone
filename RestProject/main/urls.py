from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register(r'phones',PhoneViewset,basename='phones')

urlpatterns = [
    path('marks/',markapi,name = 'marks'),
    path('products/',productapi,name='products'),
    path('register/',Registerapi,name='register'),
    path('login/',LoginView.as_view(),name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('user-me/', MeView.as_view(), name='user-me'),
    path('marks/<int:id>/', Markditail, name='mark-detail'),
    path('',include(router.urls)),
    
]