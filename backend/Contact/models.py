from django.db import models
from datetime import date


class Data(models.Model):
    FirstName = models.CharField(max_length=20)
    LastName = models.CharField(max_length=30)
    Email = models.CharField(max_length=20)
    Messages = models.TextField()
    date = models.DateField(default=date.today)


