from rest_framework import serializers
from goodmood.utils import get_jalali
from transactions.models import Transaction


class TransactionsListSerializer(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField(read_only=True)

    def get_created_at(self, obj):
        return get_jalali(obj.created_at)

    class Meta:
        model = Transaction
        fields = [
            'id',
            'amount',
            'status',
            'description',
            'created_at',
        ]

    def to_representation(self, instance):
        representation = super(TransactionsListSerializer, self).to_representation(instance)
        representation['type'] = 'withdraw' if getattr(instance, 'withdraw', None) else 'deposit'

        return representation
