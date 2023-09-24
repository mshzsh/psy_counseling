from rest_framework.views import APIView, Response
from rest_framework import status
from timetable.tools import get_aps
from users.models import User


class Timetable(APIView):
    def get(self, request):
        consultation_type = request.GET.get('consultation_type')
        expert = request.GET.get('expert')
        center = request.GET.get('center')

        if str(consultation_type) != 'in_office':
            consultation_type = 'online'

        try:
            expert = User.objects.get(pk=expert)
        except:
            expert = None

        return Response(get_aps(consultation_type, expert, center, True), status=status.HTTP_200_OK)
