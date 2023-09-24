from django.conf import settings
from django.shortcuts import redirect
from django.utils.timezone import now
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from zeep import Client
from transactions.models import Transaction, Deposit

MERCHANT = settings.ZARINPAL_MERCHANT


def client():
    if settings.PRODUCTION:
        # return Client('https://www.zarinpal.com/pg/services/WebGate/wsdl')
        return Client('https://sandbox.zarinpal.com/pg/services/WebGate/wsdl')
    return Client('https://sandbox.zarinpal.com/pg/services/WebGate/wsdl')


CallbackURL = settings.ZARINPAL_CALLBACK_URL

email = None
mobile = None


class SendRequest(APIView):

    def get(self, request):

        amount = request.GET.get('amount')
        description = request.GET.get('description', '')
        owner = request.GET.get('owner')
        redirect_url = request.GET.get('redirect_url')

        if not amount or not description or not owner:
            return Response({'detail': 'Bad request'}, status=status.HTTP_400_BAD_REQUEST)

        result = client().service.PaymentRequest(
            MERCHANT, amount, description, email, mobile,
            CallbackURL + f'?amount={amount}&owner={owner}&description={description}&redirect_url={redirect_url}')
        if result.Status == 100:
            if settings.PRODUCTION:
                # return redirect('https://www.zarinpal.com/pg/StartPay/' + str(result.Authority))
                return redirect('https://sandbox.zarinpal.com/pg/StartPay/' + str(result.Authority))
            return redirect('https://sandbox.zarinpal.com/pg/StartPay/' + str(result.Authority))
        else:
            return Response({'detail': 'Error code: ' + str(result.Status)}, status=status.HTTP_406_NOT_ACCEPTABLE)


class Verify(APIView):
    def get(self, request):
        param_char = '?'
        redirect_url = str(request.GET.get('redirect_url'))
        if redirect_url.find('?') != -1:
            param_char = '&'

        amount = request.GET.get('amount')
        owner = request.GET.get('owner')
        description = request.GET.get('description')

        transaction = Transaction.objects.create(amount=amount, description=description, owner_id=owner, status=False)

        if request.GET.get('Status') == 'OK':

            result = client().service.PaymentVerification(MERCHANT, request.GET['Authority'], amount)

            if str(result.Status) == '100':

                deposit = Deposit.objects.create(transaction=transaction)
                deposit.tracking_code = str(result.RefID)
                deposit.bank_responded_at = now()
                deposit.bank_gateway = 1
                deposit.bank_response_status = 1
                deposit.save()
                transaction.status = True
                transaction.save()

                return redirect(redirect_url + param_char + 'id={}&status=true'.format(transaction.pk))

            elif str(result.Status) == '101':

                return Response('Transaction submitted : ' + str(result.Status),
                                status=status.HTTP_101_SWITCHING_PROTOCOLS)
            else:
                deposit = Deposit.objects.create(transaction=transaction)
                deposit.tracking_code = str(result.RefID)
                deposit.bank_responded_at = now()
                deposit.bank_gateway = 1
                deposit.bank_response_status = 3
                deposit.save()

                return redirect(redirect_url + param_char + 'id={}&status=false'.format(transaction.pk))
        else:

            deposit = Deposit.objects.create(transaction=transaction)
            deposit.bank_responded_at = now()
            deposit.bank_response_status = 4
            deposit.save()

        return redirect(redirect_url + param_char + 'id={}&status=false'.format(transaction.pk))
