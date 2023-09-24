from django.db.models import Q
from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated
from goodmood import permissions as p
from goodmood.pagination import CustomPagination
from common.staffs import serializers
from common.models import Clinic, Center, Tag


# ------------------------------------------------------------------------------------> Clinic
class CreateClinic(CreateAPIView):
    permission_classes = [IsAuthenticated, p.CreateClinic]
    serializer_class = serializers.CreateClinicSerializer


class ClinicsList(ListAPIView):
    permission_classes = [IsAuthenticated, p.GetClinic]
    queryset = Clinic.objects.filter()
    serializer_class = serializers.ClinicsListSerializer


# No need to GET method because list is full field.
class UpdateClinic(UpdateAPIView):
    permission_classes = [IsAuthenticated, p.EditClinic]
    queryset = Clinic.objects.filter()
    serializer_class = serializers.UpdateClinicSerializer

# ------------------------------------------------------------------------------------> Center


class CreateCenter(CreateAPIView):
    permission_classes = [IsAuthenticated, p.CreateCenter]
    serializer_class = serializers.CreateCenterSerializer


class CentersList(ListAPIView):
    permission_classes = [IsAuthenticated, p.GetCenter]
    queryset = Center.objects.filter()
    serializer_class = serializers.CentersListSerializer


class CenterDetails(RetrieveUpdateAPIView):
    queryset = Center.objects.filter()
    serializer_class = serializers.CenterDetailsSerializer

    def get_permissions(self):
        permission_classes = []
        if self.request.method in ['PUT', 'PATCH']:
            permission_classes = [IsAuthenticated, p.EditCenter]
        elif self.request.method == 'GET':
            permission_classes = [IsAuthenticated, p.GetCenter]

        return [permission() for permission in permission_classes]


# ------------------------------------------------------------------------------------> Tag

class CreateTag(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.CreateTagSerializer


class TagsList(ListAPIView):
    permission_classes = [IsAuthenticated]
    pagination_class = CustomPagination
    serializer_class = serializers.TagsListSerializer

    def get_queryset(self):
        sort = self.request.GET.get('sort', '-created_at')
        search = self.request.GET.get('search', '')
        is_disabled = self.request.GET.get('is_disabled')
        created_automatically = self.request.GET.get('created_automatically')

        query = Q()

        if search:
            query.add(Q(title__icontains=search), Q.OR)

        query.add(Q(is_deleted=False), Q.AND)
        if is_disabled is not None:
            query.add(Q(is_disabled=is_disabled.capitalize()), Q.AND)
        if created_automatically is not None:
            query.add(Q(created_automatically=created_automatically.capitalize()), Q.AND)

        return Tag.objects.filter(query).order_by(sort)


class TagDetails(RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.TagDetailsSerializer
    queryset = Tag.objects.filter(is_deleted=False)
