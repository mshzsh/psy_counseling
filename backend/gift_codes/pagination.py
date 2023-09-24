from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class GiftCodesPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 1000

    def get_paginated_response(self, data):
        return Response({'total': self.page.paginator.count, 'results': data})
