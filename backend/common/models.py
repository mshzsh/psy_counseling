import os
from django.contrib.gis.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from goodmood.validators import FileValidator


def center_images_path(instance, filename):
    return os.path.join('center', str(instance.center.pk), filename)


class Clinic(models.Model):
    title = models.CharField(max_length=250, null=True)
    description = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    icon = models.FileField(
        upload_to='icons/clinic', validators=[FileValidator(max_size=2*1000000, content_types=[
            'image/jpeg',
            'image/png',
            'image/svg+xml',
        ])], null=True)

    def __str__(self):
        return str(self.title)


class Center(models.Model):
    title = models.CharField(max_length=250, null=True)
    description = models.TextField(null=True)
    contact = models.TextField(null=True)
    clinics = models.ManyToManyField('common.Clinic', related_name='centers')
    created_at = models.DateTimeField(auto_now_add=True)
    location = models.OneToOneField('common.CenterLocation', models.SET_NULL,
                                    related_name='center', null=True)
    icon = models.FileField(
        upload_to='icons/clinic', validators=[FileValidator(max_size=2*1000000, content_types=[
            'image/jpeg',
            'image/png',
            'image/svg+xml',
        ])], null=True)

    def __str__(self):
        return str(self.title)


class CenterImage(models.Model):
    image = models.ImageField(null=True, upload_to=center_images_path)
    center = models.ForeignKey('common.Center', models.SET_NULL, null=True, related_name='center')


class CenterLocation(models.Model):
    address = models.TextField(null=True)
    point = models.PointField(geography=True, null=True)
    city = models.ForeignKey('locations.City', models.SET_NULL, null=True, related_name='centers')


class Comment(models.Model):
    content = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_disabled = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)
    rate = models.PositiveSmallIntegerField(
        null=True,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ])
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
    commenter = models.ForeignKey(
        'users.User', on_delete=models.SET_NULL, null=True, related_name='comments_given')  # user
    comment_recipient = models.ForeignKey(
        'users.User', on_delete=models.SET_NULL, null=True, blank=True, related_name='comments_received')  # expert

    def __str__(self) -> str:
        return f'{self.commenter.name} --- {self.content_type} | {self.object_id} --- {self.content[:30]}'


class ReportComment(models.Model):
    description = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    comment = models.ForeignKey('common.Comment', on_delete=models.SET_NULL,
                                null=True, related_name='reports')
    reporter = models.ForeignKey('users.User', on_delete=models.SET_NULL,
                                 null=True, related_name='reports')

    def __str__(self) -> str:
        return f'{self.reporter.name} --- {self.comment.id}'


class Like(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    liker = models.ForeignKey(
        'users.User', on_delete=models.SET_NULL, null=True, related_name='likes')
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')

    def __str__(self) -> str:
        return f'{self.liker.name} --- {self.content_type} | {self.object_id}'


class Tag(models.Model):
    title = models.CharField(max_length=250, null=True, unique=True)
    created_automatically = models.BooleanField(default=False)
    is_disabled = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)
    clinic_id = models.IntegerField(null=True, blank=True)  # created automatically by clinic
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.title)
