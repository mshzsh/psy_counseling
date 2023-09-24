from rest_framework.views import Response, APIView
from rest_framework.permissions import IsAuthenticated
from goodmood.permissions import CompleteRegistration
from rest_framework import status
from django.conf import settings
from goodmood import exceptions


class GetPaymentUrl(APIView):
    permission_classes = [IsAuthenticated, CompleteRegistration]

    def get(self, request):
        owner = request.user

        # Zarinpal
        if str(request.GET.get('gateway')) == '1':
            amount = request.GET.get('amount')
            description = request.GET.get('description')
            redirect_url = request.GET.get('redirect_url')

            if not amount:
                raise exceptions.AmountException()
            if not description:
                raise exceptions.DescriptionException()

            url = settings.ZARINPAL_REQUEST + \
                f'?amount={str(amount)}&description={str(description)}&owner={str(owner.id)}&redirect_url={str(redirect_url)}'

            return Response({'url': url}, status=status.HTTP_200_OK)

        # Add other banks gateway here

        raise exceptions.GatewayException()
