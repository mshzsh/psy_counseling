from decimal import Decimal
from django.utils import timezone
from gift_codes.models import Gift, Usage
from gift_codes import exceptions


def check_gift_code(owner, code, amount=None):
    if owner and code:
        if amount:
            try:
                amount = Decimal(amount)
            except:
                raise exceptions.AmountException()
        try:
            gift = Gift.objects.get(code=code)
        except:
            raise exceptions.GiftCodeNotFoundException()

        if not gift.is_active:
            raise exceptions.GiftCodeInactiveException()

        if gift.limit:
            limit = Usage.objects.filter(gift=gift).count()
            if limit >= gift.limit:
                raise exceptions.GiftCodeLimitException()

        if gift.expire:
            if gift.expire < timezone.now():
                raise exceptions.GiftCodeExpiredException()

        if gift.personal:
            if gift.personal != owner:
                raise exceptions.GiftCodeUserException()

        usage_check = Usage.objects.filter(user=owner, gift=gift)
        if usage_check.exists():
            raise exceptions.GiftCodeUsedException()

        if gift.gift_type == 1:
            result = None
            if amount:
                num = amount * int(gift.percent) / 100
                result = amount - num
                if gift.ceiling_amount:
                    if gift.ceiling_amount < num:
                        result = amount - gift.ceiling_amount

            res = {
                'gift_type': gift.gift_type,
                'value': gift.percent,
                'title': gift.title,
                'result': str(result)
            }
            return [res, gift]

        if gift.gift_type == 2:
            result = None
            if amount:
                result = amount - gift.money
                if result < 0:
                    result = 0
            res = {
                'gift_type': gift.gift_type,
                'value': str(gift.money),
                'title': gift.title,
                'result': str(result)
            }
            return [res, gift]

        if gift.gift_type == 3:
            res = {
                'gift_type': gift.gift_type,
                'value': gift.get_item_display(),
                'item_id': gift.item_id,
                'title': gift.title,
                'result': 0

            }
            return [res, gift]

    raise exceptions.OwnerAndCodeException()


def use_gift_code(owner, code, amount):

    gift = check_gift_code(owner=owner, code=code, amount=amount)
    usage_id = Usage.objects.create(user=owner, gift=gift[1])

    return {'details': gift[0], 'usage_id': usage_id}
