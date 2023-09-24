from django.urls import path
from gift_codes import views
from gift_codes.staffs import views as staffs

urlpatterns = [
    path('', staffs.GiftList.as_view()),
    path('create/', staffs.GiftCreate.as_view()),
    path('<int:pk>/', staffs.GiftEdit.as_view()),
]
