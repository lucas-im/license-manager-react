from rest_framework import serializers
from .models import Clients


class ClientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clients
        fields = ('client_id', 'name', 'phone', 'start_date', 'expiry_date')