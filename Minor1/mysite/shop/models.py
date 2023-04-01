from django.db import models

# Create your models here.
class Product(models.Model):
    customer_id = models.FloatField()
    country = models.CharField(max_length=100)
    product = models.CharField(max_length=250)
    quantity = models.IntegerField()
