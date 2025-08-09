from django.contrib import admin
from .models import *



@admin.register(PhoneName)
class PhoneNameModelAdmin(admin.ModelAdmin):
    list_display = ['name']
    list_display_links = ['name']
    search_fields = ['name']
