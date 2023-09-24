from django.urls import path
from consultations import views
from consultations.users import views as user_view

urlpatterns = [
    path('create/', views.CreateCounseling.as_view()),

    #-------------------------------------------------------------- User
    path('user/counselings/', user_view.CounselingsList.as_view()),
]
