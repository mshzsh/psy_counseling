from django.db.models import Q
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from goodmood.pagination import CustomPagination
from consultations.users.serializers import CounselingsListSerializer
from consultations.models import Counseling


class CounselingsList(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CounselingsListSerializer
    pagination_class = CustomPagination

    def get_queryset(self):
        sort = self.request.GET.get('sort', '-created_at')
        sort = '-created_at' if sort == '' else sort
        consultation_type = self.request.GET.get('consultation_type')
        turn = self.request.GET.get('turn')

        query = Q(owner=self.request.user)

        if consultation_type:
            query.add(Q(consultation_type=consultation_type), Q.AND)

        if turn:
            query.add(Q(status=1), Q.AND)

        return Counseling.objects.filter(query).order_by(sort)
