from rest_framework import serializers
from goodmood.utils import get_jalali
from timetable.tools import get_week_day, time_id_to_time
from consultations.models import Counseling


class CounselingsListSerializer(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField(read_only=True)
    consultation_date = serializers.SerializerMethodField(read_only=True)
    week_day = serializers.SerializerMethodField(read_only=True)
    consultation_type = serializers.CharField(source='get_consultation_type_display')

    def get_created_at(self, obj):
        return get_jalali(obj.created_at)

    def get_consultation_date(self, obj):
        return get_jalali(obj.consultation_date)

    def get_week_day(self, obj):
        return get_week_day(obj.consultation_date)

    class Meta:
        model = Counseling
        fields = [
            'id',
            'consultation_type',
            'consultation_date',
            'week_day',
            'amount',
            'discount',
            'description',
            'created_at',
        ]

    def to_representation(self, instance):
        center = None
        if instance.center:
            center = {
                'title': instance.center.title,
                'city': instance.center.location.city.name,
                'address': instance.center.location.address,
            }
        representation = super(CounselingsListSerializer, self).to_representation(instance)
        representation['expert'] = instance.expert.name
        representation['expert_title'] = instance.expert.expert.title.title
        representation['avatar'] = instance.expert.avatar.url if instance.expert.avatar else None
        representation['gift_code'] = instance.gift_code.gift.code if instance.gift_code else None
        representation['center'] = center
        if str(instance.consultation_type) == 'in_office':
            representation['time'] = time_id_to_time(instance.time_id)

        return representation
