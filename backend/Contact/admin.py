from django.contrib import admin
from .models import Data


# Register your models here.
class DataAdmin(admin.ModelAdmin):
    list_display = ['id','FirstName','LastName','Email','Messages','date']

admin.site.register(Data, DataAdmin)
