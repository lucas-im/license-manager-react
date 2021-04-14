from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from server.django_app.views import ClientsViewSetByName, ClientsViewSetByPhone


router = DefaultRouter()
router.register("clients/name", ClientsViewSetByName, basename="clients")
router.register("clients/name", ClientsViewSetByPhone, basename="clients")
clients_urlpatterns = [url("api/", include(router.urls))]
