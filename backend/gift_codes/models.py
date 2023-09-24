from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.gis.db import models
from django.utils.timezone import now
from django_jalali.db import models as jmodels
from goodmood.utils import gift_code_generator


def get_code(instance):
    code = gift_code_generator()

    qs_exists = instance.__class__.objects.filter(code=code)
    if qs_exists.exists():
        return get_code(instance)

    return code


class Gift(models.Model):
    GIFT_TYPE = (
        (1, 'percent'),
        (2, 'money'),
        (3, 'item'),
    )
    ITEM = (
        (1, 'in_office_counseling'),
        (2, 'voice_call_counseling'),
        (3, 'video_call_counseling'),
        (4, 'test'),
    )
    ROLE = (
        (1, 'all'),
        (2, 'experts'),
    )
    gift_type = models.PositiveSmallIntegerField(choices=GIFT_TYPE, default=1)
    percent = models.PositiveSmallIntegerField(null=True, validators=[
        MaxValueValidator(100),
        MinValueValidator(1)
    ], blank=True)
    title = models.CharField(max_length=150, null=True, blank=True)
    money = models.DecimalField(default=0, max_digits=6, decimal_places=0, null=True, blank=True)
    ceiling_amount = models.DecimalField(
        default=0, max_digits=6, decimal_places=0, null=True, blank=True)
    item = models.PositiveSmallIntegerField(choices=ITEM, null=True, blank=True)
    item_id = models.CharField(max_length=30, null=True, blank=True)
    item_value = models.DecimalField(max_digits=7, decimal_places=0, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=now)
    code = models.CharField(max_length=30, unique=True, null=True, blank=True)
    expire = jmodels.jDateField(null=True, blank=True)
    limit = models.PositiveIntegerField(null=True, blank=True)  # by user
    role = models.PositiveSmallIntegerField(choices=ROLE, default=1, blank=True)
    personal = models.ForeignKey(
        'users.User',
        null=True,
        on_delete=models.SET_NULL,
        related_name='giftcodes', blank=True
    )

    def save(self, *args, **kwargs):
        if not self.code:
            self.code = get_code(self)

        super(Gift, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return f'{str(self.id)} --- {str(self.code)}'


class Usage(models.Model):
    user = models.ForeignKey(
        'users.User',
        null=True,
        on_delete=models.SET_NULL,
        related_name='used_gifts'
    )
    gift = models.ForeignKey(
        Gift,
        null=True,
        on_delete=models.SET_NULL,
        related_name='used_users'
    )
    created_at = models.DateTimeField(default=now)
