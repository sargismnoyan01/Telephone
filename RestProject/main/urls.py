from django.urls import path
from .views import *

urlpatterns = [
    path('marks/',markapi,name = 'marks'),
    path('products/',productapi,name='products'),
    path('register/',Registerapi,name='register'),
    path('login/',LoginView.as_view(),name='login'),
    path('logout/',LogoutView.as_view(),name='logout'),
    
]