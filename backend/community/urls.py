from django.urls import path
from community import views
from community.users import views as user_view

urlpatterns = [
    path('question/create/', views.CreateQuestion.as_view()),
    path('questions/', views.QuestionsList.as_view()),
    path('question/<int:pk>/', views.QuestionDetails.as_view()),

    #-------------------------------------------------------------- User
    path('user/questions/', user_view.QuestionsList.as_view()),
    path('user/question/<int:pk>/', user_view.QuestionDetails.as_view()),

]
