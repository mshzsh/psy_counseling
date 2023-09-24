from django.urls import path
from timetable import views

urlpatterns = [
    path('', views.Timetable.as_view()),
]
