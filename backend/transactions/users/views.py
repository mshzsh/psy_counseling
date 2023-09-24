from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from goodmood.pagination import CustomPagination
from transactions.users.serializers import TransactionsListSerializer
from transactions.models import Transaction


class TransactionsList(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = TransactionsListSerializer
    pagination_class = CustomPagination

    def get_queryset(self):
        return Transaction.objects.filter(owner=self.request.user)
