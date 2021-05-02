from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .views import ClientsViewSetByName, ClientsViewSetByPhone, ModifyClientById


router = DefaultRouter()
router.register('name', ClientsViewSetByName)
router.register('phone', ClientsViewSetByPhone)
router.register('id', ModifyClientById)
urlpatterns = [url('api/', include(router.urls))]
