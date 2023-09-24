from django.contrib.gis.db import models


class PriceDetermination(models.Model):
    in_office_msc_ex_0_10 = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    in_office_msc_ex_10_20 = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    in_office_msc_ex_20_up = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    in_office_phd_ex_0_10 = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    in_office_phd_ex_10_20 = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    in_office_phd_ex_20_up = models.DecimalField(default=0, max_digits=12, decimal_places=0)

    voice_call_msc_ex_0_10 = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    voice_call_msc_ex_10_20 = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    voice_call_msc_ex_20_up = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    voice_call_phd_ex_0_10 = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    voice_call_phd_ex_10_20 = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    voice_call_phd_ex_20_up = models.DecimalField(default=0, max_digits=12, decimal_places=0)

    video_call_msc_ex_0_10 = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    video_call_msc_ex_10_20 = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    video_call_msc_ex_20_up = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    video_call_phd_ex_0_10 = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    video_call_phd_ex_10_20 = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    video_call_phd_ex_20_up = models.DecimalField(default=0, max_digits=12, decimal_places=0)

    created_at = models.DateTimeField(auto_now_add=True)
