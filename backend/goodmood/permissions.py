from django.utils.translation import gettext_lazy as _
from rest_framework import permissions


class CompleteRegistration(permissions.BasePermission):

    message = _('Need to complete registration')

    def has_permission(self, request, view):
        if request.user.complete_registration:
            return True
        return False


# ------------------------------------------------------------------------------------> Clinic
class CreateClinic(permissions.BasePermission):
    message = _('You are not allowed to perform this action')

    def has_permission(self, request, view):
        if 'create-clinic' in request.user.role or 'admin' in request.user.role:
            return True
        return False


class EditClinic(permissions.BasePermission):
    message = _('You are not allowed to perform this action')

    def has_permission(self, request, view):
        if 'edit-clinic' in request.user.role or 'admin' in request.user.role:
            return True
        return False


class GetClinic(permissions.BasePermission):
    message = _('You are not allowed to perform this action')

    def has_permission(self, request, view):
        if 'get-clinic' in request.user.role or 'admin' in request.user.role:
            return True
        return False


# ------------------------------------------------------------------------------------> Center
class CreateCenter(permissions.BasePermission):
    message = _('You are not allowed to perform this action')

    def has_permission(self, request, view):
        if 'create-center' in request.user.role or 'admin' in request.user.role:
            return True
        return False


class EditCenter(permissions.BasePermission):
    message = _('You are not allowed to perform this action')

    def has_permission(self, request, view):
        if 'edit-center' in request.user.role or 'admin' in request.user.role:
            return True
        return False


class GetCenter(permissions.BasePermission):
    message = _('You are not allowed to perform this action')

    def has_permission(self, request, view):
        if 'get-center' in request.user.role or 'admin' in request.user.role:
            return True
        return False
