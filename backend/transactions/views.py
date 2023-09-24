from decimal import Decimal
from rest_framework.views import APIView, Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from goodmood.permissions import CompleteRegistration
from gift_codes.views import check_gift_code


class CheckBalance(APIView):
    permission_classes = [IsAuthenticated, CompleteRegistration]

    def get(self, request):
        gift_code = request.GET.get('gift_code')
        amount = request.GET.get('amount', '0')
        amount = Decimal(amount) if amount.isnumeric() else Decimal(0)
        owner = request.user


        if gift_code:
            gift = check_gift_code(owner.pk, gift_code, amount)[0]
            amount = Decimal(gift['result'])

        if Decimal(owner.balance()) < amount:
            res = {
                'amount_payable': str(amount - Decimal(owner.balance())),
                'without_wallet': str(amount),
            }
            if gift_code:
                res.update({
                    'gift_type': gift['gift_type'],
                    'value': gift['value'],
                    'title': gift['title'],
                })

            return Response(res, status=status.HTTP_200_OK)

        if gift_code:
            res = {
                'deductible_amount': str(amount),
                'gift_type': gift['gift_type'],
                'value': gift['value'],
                'title': gift['title'],
            }
            return Response(res, status=status.HTTP_202_ACCEPTED)

        return Response(status=status.HTTP_202_ACCEPTED)
