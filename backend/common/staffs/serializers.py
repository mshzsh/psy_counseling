from rest_framework import serializers
from common.models import Clinic, Center, Tag

# ------------------------------------------------------------------------------------> Clinic


class CreateClinicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clinic
        fields = [
            'id',
            'icon',
            'title',
            'description',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']
        extra_kwargs = {
            'title': {'required': True},
        }


class ClinicsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clinic
        fields = [
            'id',
            'icon',
            'title',
            'description',
            'created_at',
        ]


class UpdateClinicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clinic
        fields = [
            'id',
            'icon',
            'title',
            'description',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']


# ------------------------------------------------------------------------------------> Center
class CreateCenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Center
        fields = [
            'id',
            'icon',
            'title',
            'contact',
            'clinics',
            'description',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']
        extra_kwargs = {
            'title': {'required': True},
        }


class CentersListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Center
        fields = [
            'id',
            'icon',
            'title',
            'created_at',
        ]


class CenterDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Center
        fields = [
            'id',
            'icon',
            'title',
            'contact',
            'clinics',
            'description',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']


# ------------------------------------------------------------------------------------> Tag


class CreateTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = [
            'id',
            'title',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']


class TagsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = [
            'id',
            'title',
            'created_automatically',
            'is_disabled',
        ]


class TagDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = [
            'id',
            'title',
            'created_automatically',
            'clinic_id',
            'is_disabled',
            'is_deleted',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at', 'clinic_id', 'created_automatically']
