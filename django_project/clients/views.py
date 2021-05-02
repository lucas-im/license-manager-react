from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import ClientsSerializer
from .models import Clients


class ModifyClientById(viewsets.ModelViewSet):
    serializer_class = ClientsSerializer
    queryset = Clients.objects.all()

    def perform_create(self, serializer):
        serializer.save()

    def perform_update(self, serializer):
        serializer.save()

    def perform_destroy(self, instance):
        instance.delete()

    def get_queryset(self):
        return self.queryset.all()


class ClientsViewSetByName(viewsets.ModelViewSet):
    serializer_class = ClientsSerializer
    queryset = Clients.objects.all()
    lookup_field = 'name__contains'

    def retrieve(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        return Response(data=serializer.data)

    def get_queryset(self):
        kwarg = self.kwargs.get('name__contains')
        return self.queryset.filter(name__contains=kwarg)


class ClientsViewSetByPhone(viewsets.ModelViewSet):
    serializer_class = ClientsSerializer
    queryset = Clients.objects.all()
    lookup_field = 'phone__contains'

    def retrieve(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        return Response(data=serializer.data)

    def get_queryset(self):
        kwarg = self.kwargs.get('phone__contains')
        return self.queryset.filter(phone__contains=kwarg)
