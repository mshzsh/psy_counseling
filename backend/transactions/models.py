import uuid
from django.utils.translation import gettext_lazy as _
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.contrib.gis.db import models
from django.conf import settings
from goodmood import exceptions
from decimal import Decimal


class Transaction(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    amount = models.DecimalField(default=0, max_digits=12, decimal_places=0)
    status = models.BooleanField(default=True)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey('users.User', models.SET_NULL, null=True, related_name='transactions')

    def save(self, *args, **kwargs):
        if Decimal(self.amount) > Decimal(settings.PAYMENT_VALUE['max']) or Decimal(self.amount) < Decimal(settings.PAYMENT_VALUE['min']):
            raise exceptions.AmountMaxMinValueException()
        super(Transaction, self).save(*args, **kwargs)


class Deposit(models.Model):
    BANK_RESPONSE_STATUS = (
        (1, _('success')),
        (2, _('unknown')),
        (3, _('failed')),
        (4, _('canceled')),
    )
    BANK_GATEWAY = (
        (1, _('zarinpal')),
    )

    bank_responded_at = models.DateTimeField(null=True)
    bank_gateway = models.PositiveSmallIntegerField(choices=BANK_GATEWAY, null=True)
    tracking_code = models.CharField(max_length=100, null=True)
    bank_response_status = models.PositiveSmallIntegerField(choices=BANK_RESPONSE_STATUS, null=True)
    transaction = models.OneToOneField(
        Transaction, models.SET_NULL, null=True, related_name='deposit')

    def save(self, *args, **kwargs):
        if self.bank_response_status:
            if str(self.bank_response_status) != '1':
                self.transaction.status = False
                self.transaction.save()
        super(Deposit, self).save(*args, **kwargs)


class Withdraw(models.Model):
    object_id = models.PositiveIntegerField()
    content_type = models.ForeignKey(ContentType, on_delete=models.SET_NULL, null=True)
    reason = GenericForeignKey('content_type', 'object_id')
    transaction = models.OneToOneField(
        Transaction, models.SET_NULL, null=True, related_name='withdraw')

    def save(self, *args, **kwargs):
        if Decimal(self.transaction.amount) > Decimal(self.transaction.owner.balance()):
            raise exceptions.BalanceException()
        super(Withdraw, self).save(*args, **kwargs)
