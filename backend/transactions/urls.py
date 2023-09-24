from django.urls import path
from transactions import views
from transactions.users import views as user_view

urlpatterns = [
    path('check-balance/', views.CheckBalance.as_view()),

    #-------------------------------------------------------------- User
    path('list/', user_view.TransactionsList.as_view()),
]
