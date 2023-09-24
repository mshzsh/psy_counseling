from rest_framework.exceptions import APIException
from rest_framework import status
from django.utils.translation import gettext_lazy as _
from django.conf import settings


# --------------------------------------------------------> 400
class InvalidMobileException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Invalid mobile number')


class InvalidCityException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Invalid city ID')


class PasswordRequiredException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Password field is required')


class CurrentPasswordException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Current password is wrong')


class OTPOrPassRequiredException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('OTP or password field is required')


class InvalidOTPException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Invalid OTP')


class AmountException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('The amount is required')


class DescriptionException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('The description is required')


class GatewayException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Gateway not found')


class AppException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('App is required')


class ObjectIdException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Object_id is wrong')


class ExpertException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Invalid expert')


class AmountMaxMinValueException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _(
        'Amount must be between {} to {}'.format(settings.PAYMENT_VALUE['min'], settings.PAYMENT_VALUE['max']))


class InvalidDatetimesException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = _('Invalid datetimes')

# --------------------------------------------------------> 404


class UserNotFoundException(APIException):
    status_code = status.HTTP_404_NOT_FOUND
    default_detail = _('User not found')


class TransactionNotFoundException(APIException):
    status_code = status.HTTP_404_NOT_FOUND
    default_detail = _('Transaction not found')


class BlogNotFoundException(APIException):
    status_code = status.HTTP_404_NOT_FOUND
    default_detail = _('Blog not found')


# --------------------------------------------------------> 401


class InvalidPasswordException(APIException):
    status_code = status.HTTP_401_UNAUTHORIZED
    default_detail = _('Invalid Password')


class InvalidTokenException(APIException):
    status_code = status.HTTP_401_UNAUTHORIZED
    default_detail = _('Invalid token')


class TokenExpiredException(APIException):
    status_code = status.HTTP_401_UNAUTHORIZED
    default_detail = _('Token has expired')


# --------------------------------------------------------> 403
class PermissionDeniedException(APIException):
    status_code = status.HTTP_403_FORBIDDEN
    default_detail = _('Permission denied')


class UserIsBlockedException(APIException):
    status_code = status.HTTP_403_FORBIDDEN
    default_detail = _('User is blocked')


class DuplicateCommentException(APIException):
    status_code = status.HTTP_403_FORBIDDEN
    default_detail = _('Duplicate comment')


class DuplicateReportCommentException(APIException):
    status_code = status.HTTP_403_FORBIDDEN
    default_detail = _('Duplicate report comment')


# --------------------------------------------------------> 429
class OTPWaitingException(APIException):
    status_code = status.HTTP_429_TOO_MANY_REQUESTS
    default_detail = _('At least {} seconds must have passed since sending OTP').format(
        settings.OTP_EXPIRATION_TIME_SECONDS)


# --------------------------------------------------------> 500


class SMSSendingException(APIException):
    status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
    default_detail = _('Failed to sending SMS')


class WithdrawException(APIException):
    status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
    default_detail = _('Failed to withdraw')


# ---------------------------------------------------------> 402


class PaymentRequiredException(APIException):
    status_code = status.HTTP_402_PAYMENT_REQUIRED
    default_detail = _('Payment required')
