from django.db import models


class Clients(models.Model):
    client_id = models.IntegerField(unique=True)
    name = models.CharField(max_length=30)
    phone = models.IntegerField()
    start_data = models.DateTimeField()
    expiry_date = models.DateTimeField()
