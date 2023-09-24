from django.urls import path
from common.staffs import views as staff
from common.users import views
urlpatterns = [
    # *  Users
    # -----------------------------------------------------------------------| Clinic
    path('clinics/', views.ClinicsList.as_view()),
    # -----------------------------------------------------------------------| Center
    path('centers/', views.CentersList.as_view()),
    # -----------------------------------------------------------------------| Comment
    path('comments/', views.CommentsList.as_view()),
    path('comment/create/', views.CreateComment.as_view()),
    path('comment/report/', views.CreateCommentReport.as_view()),
    # -----------------------------------------------------------------------| Like
    path('like/', views.LikeAndUnlike.as_view()),


    # -----------------------------------------------------------------------| Search
    path('search/', views.GeneralSearch.as_view()),



    # *  Staff
    # -----------------------------------------------------------------------| Clinic
    path('staff/clinics/', staff.ClinicsList.as_view()),
    path('staff/clinic/create/', staff.CreateClinic.as_view()),
    path('staff/clinic/<int:pk>/', staff.UpdateClinic.as_view()),
    # -----------------------------------------------------------------------| Center
    path('staff/centers/', staff.CentersList.as_view()),
    path('staff/center/create/', staff.CreateCenter.as_view()),
    path('staff/center/<int:pk>/', staff.CenterDetails.as_view()),
    # -----------------------------------------------------------------------| Tag
    path('staff/tags/', staff.TagsList.as_view()),
    path('staff/tag/create/', staff.CreateTag.as_view()),
    path('staff/tag/<int:pk>/', staff.TagDetails.as_view()),
]
