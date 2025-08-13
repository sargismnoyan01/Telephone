from django.contrib import admin
from .models import *



@admin.register(PhoneName)
class PhoneNameModelAdmin(admin.ModelAdmin):
    list_display = ['name']
    list_display_links = ['name']
    search_fields = ['name']

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['model_name', 'phone_name', 'storage', 'color', 'price', 'in_stock', 'release_date']
    list_filter = ['phone_name', 'color', 'in_stock']
    search_fields = ['model_name', 'phone_name__name', 'color']
    ordering = ['-release_date']