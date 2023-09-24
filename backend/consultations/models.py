from django.contrib.gis.db import models
from django.utils.translation import gettext_lazy as _

COUNSELING_STATUS = (
    (1, _('pending')),
    (2, _('canceled')),
    (3, _('done')),
)


class Counseling(models.Model):
    CONSULTATION_TYPE = (
        ('in_office', _('In office')),
        ('voice_call', _('Voice Call')),  # Online
        ('video_call', _('Video Call')),  # Online
    )
    consultation_type = models.CharField(
        max_length=10, choices=CONSULTATION_TYPE, default='voice_call')
    consultation_date = models.CharField(null=True, max_length=10)
    time_id = models.PositiveSmallIntegerField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    description = models.TextField(null=True)
    emergency = models.BooleanField(default=False)
    status = models.PositiveSmallIntegerField(choices=COUNSELING_STATUS, default=1)
    amount = models.CharField(max_length=30, default='0')
    discount = models.CharField(max_length=30, default='0')
    gift_code = models.ForeignKey('gift_codes.Usage', on_delete=models.SET_NULL,
                                  null=True, related_name='consultations')
    owner = models.ForeignKey('users.User', on_delete=models.SET_NULL,
                              null=True, related_name='taken_consultations')
    expert = models.ForeignKey('users.User', on_delete=models.SET_NULL,
                               null=True, related_name='consultations')
    center = models.ForeignKey('common.Center', on_delete=models.SET_NULL,
                               null=True, related_name='consultations')

    def __str__(self):
        return f'{str(self.id)} : {str(self.owner.name)}'


class Status(models.Model):
    status = models.PositiveSmallIntegerField(choices=COUNSELING_STATUS)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    counseling = models.ForeignKey('consultations.Counseling', on_delete=models.SET_NULL,
                                   null=True, related_name='statuses')

    def save(self, *args, **kwargs):
        self.counseling.status = self.status
        self.counseling.save()
        super(Status, self).save(*args, **kwargs)
