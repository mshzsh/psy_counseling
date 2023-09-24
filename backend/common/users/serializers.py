from rest_framework import serializers
from goodmood import exceptions
from goodmood.utils import format_date_to_letters
from goodmood.circular_utils import get_content_type
from common.models import Clinic, Center, Comment, ReportComment, Like

# ------------------------------------------------------------------------------------> Clinic


class ClinicsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clinic
        fields = [
            'id',
            'icon',
            'title',
            'description',
            'created_at',
        ]

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['experts_count'] = instance.experts.count()

        return rep

# ------------------------------------------------------------------------------------> Center


class CentersListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Center
        fields = [
            'id',
            'icon',
            'title',
            'description',
            'created_at',
        ]

# ------------------------------------------------------------------------------------> Comment


class CreateCommentSerializer(serializers.ModelSerializer):
    app = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = Comment
        fields = [
            'id',
            'content',
            'rate',
            'object_id',
            'created_at',
            # ------------
            'app',
        ]

    def create(self, validated_data):
        commenter = self.context['request'].user
        content = validated_data.get('content')
        rate = validated_data.get('rate')
        object_id = validated_data.get('object_id')
        app = validated_data.get('app')

        content_type = get_content_type(app, object_id)

        #! Uncomment following lines for limit comment.
        # if Comment.objects.filter(
        #         commenter=commenter,
        #         content_type=content_type,
        #         object_id=object_id).exists():
        #     raise exceptions.DuplicateCommentException()

        comment = Comment.objects.create(
            commenter=commenter,
            content=content,
            rate=rate,
            object_id=object_id,
            content_type=content_type,
        )

        return comment


class CommentsListSerializer(serializers.ModelSerializer):
    def get_created_at(self, obj):
        return format_date_to_letters(obj.created_at)
    created_at = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Comment
        fields = [
            'id',
            'content',
            'created_at',
            'rate',
        ]

    def to_representation(self, instance):
        user, like = self.context['request'].user, None
        if user.is_authenticated:
            like = True if Like.objects.filter(liker=user, content_type=get_content_type(
                'comment', instance.id), object_id=instance.id).exists() else False

        likes = Like.objects.filter(content_type=get_content_type(
            'comment', instance.id), object_id=instance.id).count()
        representation = super().to_representation(instance)
        representation['commenter'] = {
            'name': instance.commenter.name,
            'avatar': instance.commenter.avatar.url if instance.commenter.avatar else None,
            'likes': likes,
            'like': like,
        }

        return representation


class CreateCommentReportSerializer(serializers.ModelSerializer):

    class Meta:
        model = ReportComment
        fields = [
            'id',
            'description',
            'comment',
        ]

    def create(self, validated_data):
        reporter = self.context['request'].user
        comment = validated_data.get('comment')
        description = validated_data.get('description')

        if ReportComment.objects.filter(reporter=reporter, comment=comment,).exists():
            raise exceptions.DuplicateReportCommentException()

        report = ReportComment.objects.create(
            reporter=reporter,
            comment=comment,
            description=description,
        )

        return report
