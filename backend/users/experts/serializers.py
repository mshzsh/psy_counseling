from django.utils.timezone import datetime
from rest_framework import serializers
from goodmood.utils import get_experience_years, get_jalali, get_expert_counseling_amount as eca
from users.models import Expert, User


class ExpertsListSerializers(serializers.ModelSerializer):
    def get_title(self, obj):
        if obj.title:
            return obj.title.title
        return None

    title = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Expert
        fields = [
            'title',
            'rate',
            'counseling_types',
            'certification_id',
            'accepts_insurance',
        ]

    def to_representation(self, instance):
        last_counseling = instance.user.consultations.filter(status=3).last(
        ) if instance.user.consultations.filter(status=3).exists() else None
        representation = super().to_representation(instance)
        representation['id'] = instance.user.id
        representation['name'] = instance.user.name
        representation['avatar'] = instance.user.avatar.url if instance.user.avatar else None
        representation['experience'] = get_experience_years(instance.certified_at)
        representation['consultations'] = instance.user.consultations.filter(status=3).count()
        representation['consultations_at'] = int((datetime.today()-instance.created_at).days/365)
        representation['last_counseling'] = get_jalali(last_counseling)
        representation['comments'] = instance.user.comments_received.count()

        return representation


class ExpertInfoSerializers(serializers.ModelSerializer):
    def get_avatar(self, obj):
        if obj.avatar:
            return obj.avatar.url
        return None

    avatar = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'id',
            'name',
            'avatar',
            'available_times',
        ]

    def to_representation(self, instance):
        centers = []
        for center in instance.expert.centers.all():
            centers.append({'id': center.id, 'title': center.title,
                           'address': center.location.address})

        rep = super().to_representation(instance)
        rep['bio'] = instance.expert.bio
        rep['bio_video'] = instance.expert.bio_video.url if instance.expert.bio_video else None
        rep['accepts_insurance'] = instance.expert.accepts_insurance
        rep['certification_id'] = instance.expert.certification_id
        rep['experience'] = get_experience_years(instance.expert.certified_at)
        rep['counseling_types'] = instance.expert.counseling_types
        rep['rate'] = instance.expert.rate
        rep['degree'] = instance.expert.degree
        rep['title'] = instance.expert.title.title if instance.expert.title else None
        rep['consultations'] = instance.consultations.filter(status=3).count()
        rep['centers'] = centers
        rep['amounts'] = {
            'in_office': str(eca(instance.expert, 'in_office')),
            'voice_call': str(eca(instance.expert, 'voice_call')),
            'video_call': str(eca(instance.expert, 'video_call'))
        }

        return rep
