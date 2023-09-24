from django.urls import path
from locations import views

urlpatterns = [
    path('', views.Locations.as_view()),
]
