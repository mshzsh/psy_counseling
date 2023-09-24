from rest_framework.views import APIView, Response
from rest_framework import status
from locations.models import Province, City


class Locations(APIView):
    def get(self, request):
        res = []
        search = request.GET.get('search', '')
        if search:

            cities = City.objects.filter(name__icontains=search)

            for city in cities:
                res.append({
                    'id': city.pk,
                    'name': city.name,
                    'province_id': city.province.pk,
                    'province': city.province.name
                })

            return Response(res, status=status.HTTP_200_OK)

        if request.GET.get('province'):
            cities = City.objects.filter(province=request.GET.get('province'))
            for city in cities:
                res.append({
                    'id': city.pk,
                    'name': city.name
                })

            return Response(res, status=status.HTTP_200_OK)

        provinces = Province.objects.all()
        for province in provinces:
            res.append({
                'id': province.pk,
                'name': province.name
            })

        return Response(res, status=status.HTTP_200_OK)
