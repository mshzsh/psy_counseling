from django.contrib.gis.db import models
from django.utils.translation import gettext_lazy as _



class Question(models.Model):
    title = models.CharField(max_length=200, null=True)
    content = models.TextField(null=True)
    views = models.PositiveIntegerField(default=0)
    is_deleted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey('users.User', on_delete=models.SET_NULL,
                              null=True, related_name='questions')


class Answer(models.Model):
    content = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    question = models.ForeignKey(Question, on_delete=models.SET_NULL,
                                 null=True, related_name='answers')
    owner = models.ForeignKey('users.User', on_delete=models.SET_NULL,
                              null=True, related_name='answers')
