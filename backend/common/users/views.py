from django.db.models import Count, Q
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.views import APIView, Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from goodmood.pagination import CustomPagination
from goodmood.permissions import CompleteRegistration
from goodmood.circular_utils import get_content_type
from common.users import serializers
from common.models import Clinic, Center, Comment, Like
from users.models import Expert
from magazine.models import Blog

# ------------------------------------------------------------------------------------> Clinic


class ClinicsList(ListAPIView):
    queryset = Clinic.objects.filter()
    serializer_class = serializers.ClinicsListSerializer


# ------------------------------------------------------------------------------------> Center

class CentersList(ListAPIView):
    pagination_class = CustomPagination
    serializer_class = serializers.CentersListSerializer

    def get_queryset(self):
        city = self.request.GET.get('city')
        if city:
            return Center.objects.filter(location__city=city)
        return Center.objects.filter()


# ------------------------------------------------------------------------------------> Comment


class CreateComment(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.CreateCommentSerializer


class CommentsList(ListAPIView):
    pagination_class = CustomPagination
    serializer_class = serializers.CommentsListSerializer

    def get_queryset(self):
        sort = self.request.GET.get('sort', '-created_at')
        app = self.request.GET.get('app')
        object_id = self.request.GET.get('object_id')

        if str(app) == 'expert':
            comments = Comment.objects.filter(
                is_disabled=False,
                is_deleted=False,
                comment_recipient=object_id,
            ).annotate(reports_count=Count('reports')).filter(reports_count__lt=3).order_by(sort)
            if self.request.user.is_authenticated:
                comments = comments.exclude(reports__reporter=self.request.user.id)

        else:
            content_type = get_content_type(app, object_id)
            comments = Comment.objects.filter(
                is_disabled=False,
                is_deleted=False,
                content_type=content_type,
                object_id=object_id,
            ).annotate(reports_count=Count('reports')).filter(reports_count__lt=3).order_by(sort)
            if self.request.user.is_authenticated:
                comments = comments.exclude(reports__reporter=self.request.user.id)

        return comments


class CreateCommentReport(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.CreateCommentReportSerializer


# ------------------------------------------------------------------------------------> Like


class LikeAndUnlike(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        liker, action = request.user, 'liked'

        object_id = request.data.get('object_id')
        app = request.data.get('app')
        content_type = get_content_type(app, object_id)

        like = Like.objects.filter(liker=liker, content_type=content_type, object_id=object_id)
        if like.exists():
            like.first().delete()
            action = 'unlike'
        else:
            Like.objects.create(
                liker=liker,
                object_id=object_id,
                content_type=content_type,
            )

        return Response({'action': action}, status=status.HTTP_200_OK)


# ------------------------------------------------------------------------------------> Search


class GeneralSearch(APIView):

    def get(self, request):
        context = request.GET.get('context')
        experts_list, magazines_list = [], []
        experts = Expert.objects.filter(
            Q(user__name__icontains=context) |
            Q(bio__icontains=context) |
            Q(title__title__icontains=context)
        )
        magazines = Blog.objects.filter(
            Q(title__icontains=context) |
            Q(content__icontains=context)
        )

        for expert in experts:
            experts_list.append({
                'id': expert.id,
                'name': expert.user.name,
                'title': expert.title.title if expert.title else None,
                'avatar': expert.user.avatar.url if expert.user.avatar else None,
            })

        for magazine in magazines:
            magazines_list.append({
                'id': magazine.id,
                'title': magazine.title,
            })

        results = {'experts': experts_list, 'magazines': magazines_list}
        return Response(results, status=status.HTTP_200_OK)
