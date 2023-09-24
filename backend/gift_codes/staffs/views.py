from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView
from gift_codes.models import Gift
from gift_codes.staffs import serializers
from gift_codes.pagination import GiftCodesPagination


class GiftList(ListAPIView):
    queryset = Gift.objects.all().order_by('-created_at')
    serializer_class = serializers.GiftListSerializer
    pagination_class = GiftCodesPagination

    def get_queryset(self):
        is_active = self.request.GET.get('is_active')

        if is_active == 'true':
            gifts = Gift.objects.filter(is_active=True).order_by('-created_at')
        elif is_active == 'false':
            gifts = Gift.objects.filter(is_active=False).order_by('-created_at')
        else:
            gifts = Gift.objects.filter().order_by('-created_at')

        return gifts


class GiftCreate(CreateAPIView):
    queryset = Gift
    serializer_class = serializers.GiftCreateSerializer


class GiftEdit(UpdateAPIView):
    queryset = Gift
    serializer_class = serializers.GiftEditSerializer
