from django.conf import settings
from rest_framework import serializers
from magazine.models import Blog, Bookmark
from common.models import Clinic, Like, Tag
from goodmood.utils import format_date_to_letters, get_jalali, get_read_time as grt
from goodmood.circular_utils import get_content_type


class GetCategories(serializers.ModelSerializer):
    class Meta:
        model = Clinic
        fields = ['id', 'title']


class GetTags(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'title']


class BlogsListSerializer(serializers.ModelSerializer):

    def get_created_at(self, obj):
        return format_date_to_letters(obj.created_at)

    def get_published_at(self, obj):
        return format_date_to_letters(obj.published_at)

    created_at = serializers.SerializerMethodField()
    published_at = serializers.SerializerMethodField()
    category = GetCategories(many=True, read_only=True)

    class Meta:
        model = Blog
        fields = [
            'id',
            'title',
            'content',
            'category',
            'published_at',
            'blog_type',
            'video_url',
            'sous_titre',
            'created_at',
            'cover',
            'view_count',
            'likes',
            'slug',
        ]

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['author'] = instance.author.name
        rep['read_time'] = grt(instance.content)
        return rep


class BlogDetailsSerializer(serializers.ModelSerializer):

    def get_created_at(self, obj):
        return format_date_to_letters(obj.created_at)

    def get_published_at(self, obj):
        return format_date_to_letters(obj.published_at)

    created_at = serializers.SerializerMethodField()
    published_at = serializers.SerializerMethodField()
    category = GetCategories(many=True, read_only=True)
    tags = GetTags(many=True, read_only=True)

    class Meta:
        model = Blog
        fields = [
            'id',
            'title',
            # 'content',
            'category',
            'published_at',
            'blog_type',
            'sous_titre',
            'created_at',
            'cover',
            'blog_images',
            'video_url',
            'tags',
            'view_count',
            'likes',
            'slug',
        ]

    def to_representation(self, instance):
        bookmark, like, related_blogs = None, None, []
        user = self.context['request'].user
        if user.is_authenticated:
            bookmark = True if Bookmark.objects.filter(
                owner=user, blog=instance).exists() else False

            like = True if Like.objects.filter(liker=user, content_type=get_content_type(
                'magazine', instance.id), object_id=instance.id).exists() else False

        for rb in Blog.objects.filter(pk__in=instance.related_blogs, is_deleted=False, is_visible=True):
            related_blogs.append({
                'id': rb.id,
                'blog_type': rb.blog_type,
                'created_at': get_jalali(rb.created_at)[:10],
                'title': rb.title,
                'view_count': rb.view_count,
                'author': rb.author.name,
                'cover': rb.cover.url if rb.cover.url else None,
                'read_time': grt(instance.content),
                'likes': rb.likes()
            })
        rep = super().to_representation(instance)
        rep['content'] = str(instance.content).replace('/media/blog/uploads/',
                                                       f"{settings.SITE_URL}/media/blog/uploads/")
        rep['author'] = instance.author.name
        rep['avatar'] = instance.author.avatar.url if instance.author.avatar else None
        rep['bookmark'] = bookmark
        rep['like'] = like
        rep['read_time'] = grt(instance.content)
        rep['related_blogs'] = related_blogs

        return rep


class BookmarksListSerializers(serializers.ModelSerializer):

    class Meta:
        model = Bookmark
        fields = [
            'id',
            'blog',
        ]
