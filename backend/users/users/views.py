from rest_framework import status
from rest_framework.views import APIView, Response
from rest_framework.permissions import IsAuthenticated
from goodmood.utils import get_user_info as gui, get_true_false_value as tof
from goodmood.validators import mobile_validator
from goodmood import exceptions
from locations.models import City


class Profile(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        res = gui(user, 'user')
        return Response(res, status=status.HTTP_200_OK)

    def patch(self, request):
        user, body = request.user, request.data
        if body.get('name'):
            user.name = body.get('name')
        if str(body.get('gender')) in ['1', '2', '3']:
            user.gender = body.get('gender')
        if body.get('email') and user.registered_by != 2:
            user.email = body.get('email')
        if body.get('mobile') and user.registered_by != 1 and not user.mobile_confirmed:
            mobile = mobile_validator(body.get('mobile'))
            if not mobile:
                raise exceptions.InvalidMobileException()
            user.mobile = mobile
        if request.FILES.get('avatar'):
            user.avatar = request.FILES.get('avatar')
        if body.get('deaf'):
            user.deaf = tof(body.get('deaf'))
        if body.get('birthday'):
            user.birthday = body.get('birthday')
        if body.get('city'):
            try:
                user.province_and_city = City.objects.get(pk=body.get('city'))
            except:
                raise exceptions.InvalidCityException()

        user.save()

        if not user.complete_registration:
            if user.name not in ['', ' ', None] and user.mobile_confirmed:
                user.complete_registration = True
                user.save()

        res = gui(user, 'user')
        return Response(res, status=status.HTTP_200_OK)
