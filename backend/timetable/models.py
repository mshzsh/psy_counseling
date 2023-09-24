from django.contrib.gis.db import models
from django.utils.translation import gettext_lazy as _


def available_time_schema():
    return {"in_office": {}, "online": {}}


class AvailableTimes(models.Model):
    available_time_ids_by_staff = models.JSONField(default=available_time_schema)
    available_time_ids_by_expert = models.JSONField(default=available_time_schema)
    expert = models.ForeignKey('users.User', on_delete=models.SET_NULL,
                               null=True, related_name='available_times')

    # monitor last update by staff

    def __str__(self):
        return str(self.expert.name)
