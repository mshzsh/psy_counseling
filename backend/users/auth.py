from urllib.parse import urlencode
from django.utils.timezone import now
from django.conf import settings
from django.shortcuts import redirect
from django.contrib.auth.hashers import check_password
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.views import Response, APIView
from rest_framework import serializers, status
from goodmood.utils import google_get_access_token, google_get_user_info, save_avatar_from_url, convert_fa_to_en_digits, otp_expired_check
from goodmood.validators import valid_and_create_otp, mobile_validator
from users.models import User, OTP
from goodmood import exceptions


class PreLogin(APIView):
    class Serializer(serializers.Serializer):
        mobile = serializers.CharField(required=True)
        send_otp = serializers.BooleanField(required=False)
        use_application = serializers.BooleanField(required=False)

    def post(self, request, *args, **kwargs):
        serializer = self.Serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        validated_data = serializer.validated_data

        mobile = validated_data.get('mobile')
        send_otp = validated_data.get('send_otp')
        use_application = validated_data.get('use_application')
        data = {'exist': True, 'has_password': True}

        mobile = mobile_validator(mobile)
        if not mobile:
            raise exceptions.InvalidMobileException()
        user = User.objects.filter(mobile=mobile)
        if user.exists():
            user = user.first()
            if use_application:
                user.use_application = True
                user.save()
            if user.is_blocked:
                raise exceptions.UserIsBlockedException()
            if user.password:
                if send_otp:
                    if not settings.SEND_OTP_BY_SMS:
                        otp = valid_and_create_otp(mobile)
                        data['otp'] = otp
                    else:
                        valid_and_create_otp(mobile)
                return Response(data, status=status.HTTP_200_OK)
            else:
                if not settings.SEND_OTP_BY_SMS:
                    otp = valid_and_create_otp(mobile)
                    data['otp'] = otp
                else:
                    valid_and_create_otp(mobile)
                data['has_password'] = False
                return Response(data, status=status.HTTP_200_OK)

        try:
            token = request.headers.get('Authorization').split(' ')[1]
            user = Token.objects.get(key=token).user
            user.mobile = mobile
            user.mobile_confirmed = True
            user.save()
            data['exist'] = True
        except:
            user = User.objects.create(mobile=mobile)
            data.pop('has_password')
            data['exist'] = False

        if not settings.SEND_OTP_BY_SMS:
            otp = valid_and_create_otp(mobile)
            data['otp'] = otp
        else:
            valid_and_create_otp(mobile)

        return Response(data, status=status.HTTP_201_CREATED)


class Login(APIView):
    class Serializer(serializers.Serializer):
        mobile = serializers.CharField(required=True)
        otp = serializers.CharField(required=False)
        password = serializers.CharField(required=False)

    def post(self, request, *args, **kwargs):
        serializer = self.Serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        validated_data = serializer.validated_data

        mobile = validated_data.get('mobile')
        otp = validated_data.get('otp')
        password = validated_data.get('password')

        mobile = mobile_validator(mobile)
        if not mobile:
            raise exceptions.InvalidMobileException()

        if request.user.is_authenticated:
            user = request.user
        else:
            user = User.objects.filter(mobile=mobile)
            if not user.exists():
                raise exceptions.UserNotFoundException()
            user = user.first()

        if not otp and not password:
            raise exceptions.OTPOrPassRequiredException()
        if otp:
            otp = convert_fa_to_en_digits(otp)
            check_otp = OTP.objects.filter(
                mobile=mobile, otp=otp, created_at__gte=otp_expired_check())
            if not check_otp.exists():
                raise exceptions.InvalidOTPException()
            check_otp.first().delete()
        elif password:
            check_password = user.check_password(password)
            if not check_password:
                raise exceptions.InvalidPasswordException()
        if user.is_blocked:
            raise exceptions.UserIsBlockedException()
        user.last_login = now()
        user.mobile_confirmed = True
        if not user.complete_registration:
            if user.name not in ['', ' ', None]:
                user.complete_registration = True

        user.save()
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'id': user.pk,
            'name': user.name,
            'avatar': user.avatar.url if user.avatar else None,
            'token': token.key,
            'balance': str(user.balance()),
        }, status=status.HTTP_200_OK)


class GoogleLogin(APIView):
    class Serializer(serializers.Serializer):
        code = serializers.CharField(required=False)
        error = serializers.CharField(required=False)

    def get(self, request, *args, **kwargs):
        serializer = self.Serializer(data=request.GET)
        serializer.is_valid(raise_exception=True)
        validated_data = serializer.validated_data

        code = validated_data.get('code')
        error = validated_data.get('error')

        if error or not code:
            params = urlencode({'error': error})
            return redirect(f'{settings.GOOGLE_FRONTEND_REDIRECT_URL}login?{params}')
        access_token = google_get_access_token(
            code=code, redirect_uri=settings.GOOGLE_BACKEND_REDIRECT_URL)
        user_data = google_get_user_info(access_token=access_token)

        user, _status = User.objects.get_or_create(email=user_data['email'])
        if _status:
            user.name = user_data.get('name')
            user.save()
            if user_data.get('picture'):
                save_avatar_from_url(user, user_data.get('picture'))
        user.last_login = now()
        user.registered_by = 2
        user.save()
        token, _ = Token.objects.get_or_create(user=user)
        return redirect(f'{settings.GOOGLE_FRONTEND_REDIRECT_URL}?token={token.key}')


class Logout(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class SetPassword(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, *args, **kwargs):
        if not request.data.get('password'):
            raise exceptions.PasswordRequiredException()
        user = request.user

        if user.password:
            current_password = request.data.get('current_password')
            if not check_password(current_password, user.password):
                raise exceptions.CurrentPasswordException()

        user.set_password(str(request.data['password']))
        user.save()

        return Response({'details': f'The password is set for user {user.mobile} '},
                        status=status.HTTP_200_OK)
