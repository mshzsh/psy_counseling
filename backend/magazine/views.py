from django.db.models import Q
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView, Response
from rest_framework.permissions import IsAuthenticated
from goodmood.pagination import CustomPagination
from goodmood import exceptions
from magazine.serializers import BlogDetailsSerializer, BlogsListSerializer, BookmarksListSerializers
from magazine.models import Blog, Bookmark


class BlogsList(ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogsListSerializer
    pagination_class = CustomPagination

    def get_queryset(self):
        sort = self.request.GET.get('sort', '-created_at')
        search = self.request.GET.get('search', '')
        blog_type = self.request.GET.get('blog_type')
        category = self.request.GET.get('category')
        tags = list(filter(None, self.request.GET.getlist('tags', [])))
        bookmark = self.request.GET.get('bookmark')

        query = Q()

        sort_list = ['created_at', '-view_count', 'likes']
        if sort not in sort_list:
            sort = '-created_at'

        if bookmark and self.request.user.is_authenticated:
            return Blog.objects.filter(
                is_deleted=False,
                is_visible=True,
                bookmarks__owner=self.request.user
            ).order_by(sort)

        if search:
            query.add(Q(title__icontains=search), Q.OR)
            query.add(Q(content__icontains=search), Q.OR)

        if category:
            query.add(Q(category=category), Q.AND)

        if len(tags):
            query.add(Q(tags__in=tags), Q.AND)

        if blog_type:
            query.add(Q(blog_type=blog_type), Q.AND)

        query.add(Q(is_deleted=False, is_visible=True), Q.AND)

        blogs = Blog.objects.filter(query)
        if sort == 'likes':
            return sorted(blogs, key=lambda blog: blog.likes(), reverse=True)
        return blogs.order_by(sort)


class BlogDetails(RetrieveAPIView):
    queryset = Blog.objects.filter(is_deleted=False, is_visible=True)
    serializer_class = BlogDetailsSerializer

    def retrieve(self, request, *args, **kwargs):
        obj = self.get_object()
        obj.view_count += 1
        obj.save(update_fields=("view_count",))
        return super().retrieve(request, *args, **kwargs)


class ToggleBookmark(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            blog = Blog.objects.get(pk=request.data.get('blog'))
        except:
            raise exceptions.BlogNotFoundException()

        bookmark = Bookmark.objects.filter(owner=request.user, blog=blog)
        if bookmark.exists():
            bookmark.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        Bookmark.objects.create(owner=request.user, blog=blog)
        return Response(status=status.HTTP_201_CREATED)


class BookmarksList(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = BookmarksListSerializers

    def get_queryset(self):
        return Bookmark.objects.filter(owner=self.request.user)
