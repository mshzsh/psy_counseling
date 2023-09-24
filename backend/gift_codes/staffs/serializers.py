from rest_framework import serializers
from gift_codes.models import Gift
from gift_codes import exceptions
from users.models import User
from goodmood.utils import get_jalali


class GiftListSerializer(serializers.ModelSerializer):

    def get_created_at(self, obj):
        return get_jalali(obj.created_at)[:16]

    created_at = serializers.SerializerMethodField(read_only=True)

    def get_personal(self, obj):
        if obj.personal:
            return str(obj.personal.mobile)
        return None

    personal = serializers.SerializerMethodField(read_only=True)

    def get_used_count(self, obj):
        return obj.used_users.count()

    used_count = serializers.SerializerMethodField(read_only=True)

    gift_type = serializers.CharField(read_only=True, source='get_gift_type_display')
    item = serializers.CharField(read_only=True, source='get_item_display')

    class Meta:
        model = Gift
        fields = [
            'used_count',
            'id',
            'title',
            'gift_type',
            'expire',
            'limit',
            'percent',
            'money',
            'item',
            'ceiling_amount',
            'is_active',
            'code',
            'personal',
            'item_value',
            'created_at',
        ]


class GiftCreateSerializer(serializers.ModelSerializer):
    personal_mobile = serializers.CharField(write_only=True, required=False)
    expire_at = serializers.CharField(write_only=True, required=False)
    item_id = serializers.IntegerField(required=False)
    item_value = serializers.IntegerField(required=False)

    class Meta:
        model = Gift
        fields = [
            # Write only
            'personal_mobile',
            'expire_at',
            # --------------------
            'id',
            'title',
            'gift_type',
            'percent',
            'limit',
            'money',
            'expire',
            'ceiling_amount',
            'item',
            'code',
            'personal',
            'item_id',
            'item_value',
            'created_at',
        ]

        read_only_fields = ['id', 'created_at', 'expire', 'personal']

    def create(self, validated_data):
        if validated_data.get('personal_mobile'):
            personal_mobile = validated_data.pop('personal_mobile')
            try:
                person = User.objects.get(mobile=personal_mobile)
            except:
                raise exceptions.InvalidMobileException()

            expire = None
            if validated_data.get('expire_at'):
                expire = validated_data.pop('expire_at')
            gift = Gift.objects.create(**validated_data)
            gift.personal = person
            gift.expire = expire
            gift.save()

            return gift

        expire = None
        if validated_data.get('expire_at'):
            expire = validated_data.pop('expire_at')
        gift = Gift.objects.create(**validated_data)
        gift.expire = expire
        gift.save()

        return gift


class GiftEditSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gift
        fields = [
            'id',
            'is_active',
        ]
