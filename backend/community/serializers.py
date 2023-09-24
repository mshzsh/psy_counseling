from rest_framework import serializers
from community.models import Question, Answer
from goodmood.utils import format_date_to_letters as dtl
from goodmood.circular_utils import get_content_type as gct
from goodmood.validators import check_role
from common.models import Like


class GetAnswers(serializers.ModelSerializer):
    owner = serializers.SerializerMethodField(read_only=True)

    def get_owner(self, obj):
        res = {'id': obj.owner.id, 'name': obj.owner.name, 'avatar': None}
        res['avatar'] == obj.owner.avatar if obj.owner.avatar else None
        return res

    class Meta:
        model = Answer
        fields = ['id', 'content', 'owner']


class CreateQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = [
            'id',
            'title',
            'content',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']
        extra_kwargs = {
            'title': {'required': True},
            'content': {'required': True},
        }

    def create(self, validated_data):
        question = Question.objects.create(**validated_data)
        question.owner = self.context.get('request').user
        question.save()
        return question


class QuestionsListSerializer(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField(read_only=True)

    def get_created_at(self, obj):
        return dtl(obj.created_at)

    class Meta:
        model = Question
        fields = [
            'id',
            'title',
            'content',
            'created_at',
            'views',
        ]

    def to_representation(self, instance):
        representation = super(QuestionsListSerializer, self).to_representation(instance)
        province = {'id': None, 'name': None}
        if instance.owner.province_and_city:
            province['id'] = instance.owner.province_and_city.province.id
            province['name'] = instance.owner.province_and_city.province.name
        likes = Like.objects.filter(content_type=gct('questions', instance.id),
                                    object_id=instance.id).count()
        representation['province'] = province
        representation['likes'] = likes
        representation['answers'] = instance.answers.count()
        return representation


class QuestionDetailsSerializer(serializers.ModelSerializer):
    answers = GetAnswers(read_only=True, many=True)
    created_at = serializers.SerializerMethodField(read_only=True)
    answer = serializers.CharField(required=False, write_only=True)
    # like = serializers.CharField(required=False, write_only=True)

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
            'answers',
            # ---------
            'answer',
            # 'like',
        ]

    def update(self, instance, validated_data):
        user = self.context.get('request').user
        if validated_data.get('answer'):
            if check_role(user, 'expert'):
                instance.answers.create(content=validated_data.get('answer'), owner=user)
                instance.save()
                return instance

        # if validated_data.get('like'):
        #     if check_role(user, 'user'):
        #         likers = instance.likes.filter(owner=user)
        #         if not likers.exists():
        #             instance.likes.create(owner=user)
        #             instance.save()
        #             return instance

        return instance

    def to_representation(self, instance):
        representation = super(QuestionDetailsSerializer, self).to_representation(instance)
        # representation['likes'] = instance.likes.count()
        province = {'id': None, 'name': None}
        if instance.owner.location:
            province['id'] = instance.owner.location.province.id
            province['name'] = instance.owner.location.province.name
        representation['province'] = province
        return representation
