from django.urls import path
from magazine import views

urlpatterns = [
    path('blogs/', views.BlogsList.as_view()),
    path('blog/<int:pk>/', views.BlogDetails.as_view()),
    path('blog/bookmark/', views.ToggleBookmark.as_view()),
    path('blog/bookmarks/', views.BookmarksList.as_view()),
]
