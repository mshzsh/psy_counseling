from django.urls import path
from users import auth
from users.users import views as users
from users.experts import views as experts

urlpatterns = [
    # -----------------------------------------------------------------------| Auth
    path('pre-login/', auth.PreLogin.as_view()),
    path('login/', auth.Login.as_view()),
    path('google/', auth.GoogleLogin.as_view()),
    path('logout/', auth.Logout.as_view()),
    path('password/', auth.SetPassword.as_view()),
    # -----------------------------------------------------------------------| Users
    path('profile/', users.Profile.as_view()),
    # -----------------------------------------------------------------------| Experts
    path('expert-profile/', experts.ExpertProfile.as_view()),
    path('experts/', experts.ExpertsList.as_view()),  # public
    path('expert/<int:pk>/', experts.ExpertInfo.as_view()),  # public
]
