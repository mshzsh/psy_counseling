from django.db.models import Q
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from goodmood.permissions import CompleteRegistration
from community.serializers import CreateQuestionSerializer, QuestionsListSerializer, QuestionDetailsSerializer
from community.models import Question
from goodmood.pagination import CustomPagination


class CreateQuestion(CreateAPIView):
    permission_classes = [IsAuthenticated, CompleteRegistration]
    serializer_class = CreateQuestionSerializer


class QuestionsList(ListAPIView):
    serializer_class = QuestionsListSerializer
    pagination_class = CustomPagination

    def get_queryset(self):
        sort = self.request.GET.get('sort', '-created_at')
        search = self.request.GET.get('search', '')
        sort = '-created_at' if sort == '' else sort

        return Question.objects.filter(
            Q(title__icontains=search) |
            Q(content__icontains=search),
            is_deleted=False
        ).order_by(sort)


class QuestionDetails(RetrieveUpdateAPIView):
    serializer_class = QuestionDetailsSerializer
    queryset = Question.objects.filter(is_deleted=False)

    def retrieve(self, request, *args, **kwargs):
        obj = self.get_object()
        obj.views += 1
        obj.save(update_fields=("views",))
        return super().retrieve(request, *args, **kwargs)
