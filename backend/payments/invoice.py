from rest_framework.views import Response, APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from goodmood.permissions import CompleteRegistration
from transactions.models import Transaction
from goodmood.utils import get_jalali
from goodmood import exceptions


class Invoice(APIView):
    permission_classes = [IsAuthenticated, CompleteRegistration]

    def get(self, request):
        transaction = request.GET.get('transaction')
        owner = request.user
        try:
            transaction = Transaction.objects.get(pk=transaction, owner=owner)
        except:
            raise exceptions.TransactionNotFoundException()
        return Response({
            'amount': str(transaction.amount),
            'status': transaction.status,
            'description': transaction.description,
            'tracking_code': transaction.deposit.tracking_code,
            'paid_at': get_jalali(transaction.deposit.bank_responded_at),
        }, status=status.HTTP_200_OK)
