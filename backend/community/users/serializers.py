from rest_framework import serializers
from community.models import Question
from goodmood.utils import format_date_to_letters as dtl
from goodmood.circular_utils import get_content_type as gct
from common.models import Like


class QuestionsListSerializer(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField(read_only=True)

    def get_created_at(self, obj):
        return dtl(obj.created_at)

    class Meta:
        model = Question
        fields = [
            'id',
            'title',
            'created_at',
            'views',
        ]

    def to_representation(self, instance):
        representation = super(QuestionsListSerializer, self).to_representation(instance)
        likes = Like.objects.filter(content_type=gct('questions', instance.id),
                                    object_id=instance.id).count()
        representation['likes'] = likes
        representation['answers'] = instance.answers.count()
        return representation


class QuestionDetailsSerializer(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField(read_only=True)

    def get_created_at(self, obj):
        return dtl(obj.created_at)

    class Meta:
        model = Question
        fields = [
            'id',
            'title',
            'content',
            'owner',
            'created_at',
            'views',
        ]
