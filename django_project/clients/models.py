from django.db import models


class Clients(models.Model):
    client_id = models.IntegerField(unique=True, primary_key=True)
    name = models.CharField(max_length=30)
    phone = models.IntegerField()
    start_date = models.DateTimeField(auto_now_add=True)
    expiry_date = models.DateTimeField(auto_now_add=False)

