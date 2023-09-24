from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.postgres.fields import ArrayField
from django.utils.translation import gettext_lazy as _
from ckeditor_uploader.fields import RichTextUploadingField
from common.models import Like


class Blog(models.Model):

    BLOG_TYPE = (
        (1, _('Blog')),
        (2, _('Video')),
        (3, _('Podcast')),
    )
    title = models.CharField(max_length=100)
    sous_titre = models.CharField(max_length=200)
    content = RichTextUploadingField()
    related_blogs = ArrayField(models.PositiveIntegerField(), default=list, blank=True)
    cover = models.ImageField(upload_to='blogs/images/')
    is_deleted = models.BooleanField(default=False)
    is_visible = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    published_at = models.DateTimeField(null=True)
    video_url = models.CharField(null=True, max_length=255, blank=True)
    blog_type = models.PositiveSmallIntegerField(default=1, choices=BLOG_TYPE)
    meta_description = models.TextField(blank=True, null=True)
    meta_title = models.TextField(blank=True, null=True)
    view_count = models.PositiveIntegerField(default=0)
    author = models.ForeignKey('users.User', models.SET_NULL, null=True, related_name='blogs')
    category = models.ManyToManyField('common.Clinic', related_name='+')
    tags = models.ManyToManyField('common.Tag', related_name='+')
    slug = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.id} : {self.title[:20]}"

    def likes(self):
        return Like.objects.filter(content_type=ContentType.objects.get_for_model(Blog), object_id=self.id).count()


class BlogImage(models.Model):
    image = models.ImageField(upload_to='blogs/images/')
    blog = models.ForeignKey('magazine.Blog', related_name="blog_images",
                             on_delete=models.SET_NULL, null=True)


class Bookmark(models.Model):
    owner = models.ForeignKey('users.User', models.SET_NULL, null=True, related_name='bookmarks')
    blog = models.ForeignKey('magazine.Blog', models.SET_NULL, null=True, related_name='bookmarks')
    created_at = models.DateTimeField(auto_now_add=True)
