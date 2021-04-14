from django.contrib import admin
from django.urls import path, include
from server.django_app.urls import clients_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += clients_urlpatterns
