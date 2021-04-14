from django.shortcuts import render
from rest_framework import generics, status, viewsets
from server.django_app.serializers import ClientsSerializer
from server.django_app.models import Clients
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse


class ClientsViewSetByName(viewsets.ModelViewSet):
    serializer_class = ClientsSerializer
    queryset = Clients.objects.all()

    def perform_create(self, serializer):
        serializer.save()

    def get_queryset(self):
        return self.queryset.filter(name=self.request.name)


class ClientsViewSetByPhone(viewsets.ModelViewSet):
    serializer_class = ClientsSerializer
    queryset = Clients.objects.all()

    def perform_create(self, serializer):
        serializer.save()

    def get_queryset(self):
        return self.queryset.filter(phone=self.request.phone)
