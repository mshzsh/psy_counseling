from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    re_path(r'^ckeditor/', include('ckeditor_uploader.urls')),
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),
    path('common/', include('common.urls')),
    path('community/', include('community.urls')),
    path('locations/', include('locations.urls')),
    path('timetable/', include('timetable.urls')),
    path('giftcodes/', include('gift_codes.urls')),
    path('consultations/', include('consultations.urls')),
    path('payments/', include(('payments.urls', 'payments'))),
    path('magazine/', include(('magazine.urls', 'magazine'))),
    path('transactions/', include(('transactions.urls', 'transactions'))),
]

if not settings.PRODUCTION:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
