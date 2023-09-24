from rest_framework.exceptions import APIException
from rest_framework import status
from django.utils.translation import gettext_lazy as _


class InvalidMobileException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Invalid Mobile')


class GiftCodeNotFoundException(APIException):
    status_code = status.HTTP_406_NOT_ACCEPTABLE
    default_detail = _('Gift code not found')


class GiftUsageNotFoundException(APIException):
    status_code = status.HTTP_406_NOT_ACCEPTABLE
    default_detail = _('Gift usage not found')


class GiftCodeInactiveException(APIException):
    status_code = status.HTTP_406_NOT_ACCEPTABLE
    default_detail = _('Gift code has inactive')


class GiftCodeLimitException(APIException):
    status_code = status.HTTP_406_NOT_ACCEPTABLE
    default_detail = _('Gift code limit error')


class GiftCodeExpiredException(APIException):
    status_code = status.HTTP_406_NOT_ACCEPTABLE
    default_detail = _('Gift code has expired')


class GiftCodeUserException(APIException):
    status_code = status.HTTP_406_NOT_ACCEPTABLE
    default_detail = _('This gift code is not for this user')


class GiftCodeUsedException(APIException):
    status_code = status.HTTP_406_NOT_ACCEPTABLE
    default_detail = _('Gift code has been used for this user')


class OwnerAndCodeException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Owner and code parameters are required')


class UserNotFoundException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('User not found')


class AmountException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Amount must be integer')
