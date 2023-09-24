from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from goodmood.permissions import CompleteRegistration
from consultations.serializers import CreateCounselingSerializer


class CreateCounseling(CreateAPIView):
    permission_classes = [IsAuthenticated, CompleteRegistration]
    serializer_class = CreateCounselingSerializer
