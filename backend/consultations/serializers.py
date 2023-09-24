from decimal import Decimal
from rest_framework import serializers
from goodmood import exceptions
from goodmood.circular_utils import withdraw
from goodmood.utils import get_expert_counseling_amount
from gift_codes.views import use_gift_code
from consultations.models import Counseling
from timetable.tools import date_time_id_validator as dtv


class CreateCounselingSerializer(serializers.ModelSerializer):
    datetimes = serializers.ListField(write_only=True, required=True)  # "2022-11-14:134"
    gift_code = serializers.CharField(write_only=True, required=False)  # "2022-11-14:134"

    class Meta:
        model = Counseling
        fields = [
            'id',
            'expert',
            'consultation_type',
            'datetimes',
            'gift_code',
            'emergency',
            'description',
            'center',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']
        extra_kwargs = {
            'expert': {'required': True},
            'consultation_type': {'required': True},
        }

    def create(self, validated_data):

        if not validated_data.get('expert').expert:
            raise exceptions.ExpertException()

        user = self.context.get('request').user

        datetimes = validated_data.pop('datetimes', [])

        for dt in datetimes:
            if not dtv(dt, validated_data.get('consultation_type')):
                datetimes.remove(dt)
        if len(datetimes) < 1:
            raise exceptions.InvalidDatetimesException()

        gift_code_already_used_once = False
        for dt in datetimes:
            dt = dt.split(':')
            consultation_date = dt[0]
            time_id = dt[1]

            amount = get_expert_counseling_amount(
                validated_data.get('expert').expert, validated_data.get('consultation_type'))

            amount_clone, discount = amount, 0

            gift_code_usage, gift_code = None, validated_data.get('gift_code')
            if not gift_code_already_used_once:
                if gift_code:
                    gift_code = validated_data.pop('gift_code')
                    gift = use_gift_code(user, gift_code, amount)
                    if not gift:
                        raise exceptions.GiftCodeException()

                    else:
                        amount = gift['details']['result']
                        discount = Decimal(amount_clone)-Decimal(amount)
                        amount_clone = amount

                    gift_code_usage = gift['usage_id']

            if Decimal(user.balance()) < Decimal(amount):
                if gift_code_usage:
                    gift_code_usage.delete()
                raise exceptions.PaymentRequiredException()

            counseling = Counseling.objects.create(**validated_data)
            counseling.owner = user
            counseling.consultation_date = consultation_date
            counseling.time_id = time_id
            counseling.amount = str(amount_clone)
            counseling.discount = str(discount)
            if gift_code_usage:
                counseling.gift_code = gift_code_usage
            counseling.save()

            if not withdraw(counseling.id, 'consultations', amount, user, 'consultation'):
                counseling.delete()
                if gift_code_usage:
                    gift_code_usage.delete()
                raise exceptions.WithdrawException()

            if gift_code_usage:
                gift_code_already_used_once = True

        return counseling
