from django.urls import path
from .views import *

urlpatterns = [
    path('marks/',markapi,name = 'marks'),
    path('products/',productapi,name='products'),
    
]