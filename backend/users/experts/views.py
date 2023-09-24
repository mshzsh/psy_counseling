from contextlib import suppress
from django.db.models import Q
from rest_framework import status
from rest_framework.views import APIView, Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from goodmood.utils import get_user_info as gui, get_true_false_value as gtf
from goodmood.pagination import CustomPagination
from users.models import Expert, Title, User
from users.experts.serializers import ExpertsListSerializers, ExpertInfoSerializers
from common.models import Clinic


class ExpertProfile(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        res = gui(user, 'expert')
        return Response(res, status=status.HTTP_200_OK)

    def patch(self, request):
        user, body = request.user, request.data
        if not user.expert:
            Expert.objects.create(user=user)
            user.save()
        expert = user.expert

        if str(body.get('degree')) in ['1', '2']:
            expert.degree = body.get('degree')
        if body.get('counseling_types'):
            counseling_types = []
            for ct in body.getlist('counseling_types'):
                if ct in ['voice_call', 'video_call', 'in_office']:
                    counseling_types.append(ct)
            expert.counseling_types = counseling_types

        if body.get('certification_id'):
            expert.certification_id = body.get('certification_id')

        if gtf(body.get('accepts_insurance')) is not None:
            expert.accepts_insurance = gtf(body.get('accepts_insurance'))

        if gtf(body.get('is_active')) is not None:
            expert.is_active = gtf(body.get('is_active'))

        if body.get('bio'):
            expert.bio = body.get('bio')

        if request.FILES.get('bio_video'):
            expert.bio_video = request.FILES.get('bio_video')

        if body.get('expertise'):
            expert.expertise.clear()
            for ex in body.getlist('expertise'):
                with suppress(Exception):
                    expert.expertise.add(Clinic.objects.get(pk=ex))

        if body.get('title'):
            with suppress(Exception):
                expert.title = Title.objects.get(pk=body.get('title'))

        expert.save()
        res = gui(user, 'expert')
        return Response(res, status=status.HTTP_200_OK)


class ExpertsList(ListAPIView):
    serializer_class = ExpertsListSerializers
    pagination_class = CustomPagination

    def get_queryset(self):
        param, query = self.request.GET, Q()
        sort = param.get('sort', '-rate')
        search = param.get('search', '')
        accepts_insurance = param.get('accepts_insurance')
        gender = param.get('gender')
        degree = param.getlist('degree', ['1', '2'])
        expertise = list(filter(None, param.getlist('expertise', [])))
        counseling_types = list(filter(None, param.getlist('counseling_types', [])))
        province = param.get('province')
        city = param.get('city')
        center = param.get('center')

        if search:
            query.add(Q(user__name__icontains=search), Q.OR)
            query.add(Q(bio__icontains=search), Q.OR)

        query.add(Q(is_verified=True), Q.AND)

        query.add(Q(degree__in=degree), Q.AND)

        if gtf(accepts_insurance) is not None:
            query.add(Q(accepts_insurance=gtf(accepts_insurance)), Q.AND)

        if len(counseling_types):
            query.add(Q(counseling_types__overlap=counseling_types), Q.AND)

        if str(gender) in ['1', '2']:
            query.add(Q(user__gender=gender), Q.AND)

        if len(expertise):
            query.add(Q(expertise__in=expertise), Q.AND)

        if center:
            query.add(Q(centers=center), Q.AND)
        elif city:
            query.add(Q(centers__location__city=city), Q.AND)
        elif province:
            query.add(Q(centers__location__city__province=province), Q.AND)

        return Expert.objects.filter(query).order_by(sort, '-call_interval_avg').distinct()


class ExpertInfo(RetrieveAPIView):
    serializer_class = ExpertInfoSerializers
    queryset = User.objects.filter(expert__isnull=False, expert__is_verified=True)
