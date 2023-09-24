from django.db.models import Q
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated
from community.users.serializers import QuestionsListSerializer, QuestionDetailsSerializer
from community.models import Question
from goodmood.pagination import CustomPagination


class QuestionsList(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = QuestionsListSerializer
    pagination_class = CustomPagination

    def get_queryset(self):
        sort = self.request.GET.get('sort', '-created_at')
        search = self.request.GET.get('search', '')
        sort = '-created_at' if sort == '' else sort

        return Question.objects.filter(
            Q(title__icontains=search) |
            Q(content__icontains=search),
            is_deleted=False,
            owner=self.request.user
        ).order_by(sort)


class QuestionDetails(RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = QuestionDetailsSerializer

    def get_queryset(self):
        return Question.objects.filter(
            is_deleted=False,
            owner=self.request.user
        )
