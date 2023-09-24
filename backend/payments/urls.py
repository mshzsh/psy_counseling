from django.urls import path
from payments import zarinpal, get_payment_url, invoice

urlpatterns = [
    path('zarinpal-request/', zarinpal.SendRequest.as_view()),
    path('zarinpal-verify/', zarinpal.Verify.as_view()),

    path('get-payment-url/', get_payment_url.GetPaymentUrl.as_view()),
    path('invoice/', invoice.Invoice.as_view()),
]
