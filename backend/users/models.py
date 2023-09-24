import os
from django.contrib.gis.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.core.validators import RegexValidator
from django.contrib.postgres.fields import ArrayField
from django_jalali.db import models as jmodels
from goodmood.validators import FileValidator


def avatars_path(instance, filename):
    return os.path.join('avatars', str(instance.pk), filename)


def bio_path(instance, filename):
    return os.path.join('bio', str(instance.pk), filename)


def education_path(instance, filename):
    return os.path.join('education', str(instance.expert.user.pk), filename)


def organization_path(instance, filename):
    return os.path.join('organization', str(instance.expert.user.pk), filename)


def default_role():
    return ['user']


class UserManager(BaseUserManager):
    def create_user(self, mobile, password=None):
        if not mobile:
            raise ValueError('Users must have a mobile number')
        if not password:
            raise ValueError('Users must have a password')

        user = self.model(mobile=mobile)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, mobile, password=None):
        user = self.create_user(
            mobile,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    GENDER = (
        (1, _('male')),
        (2, _('female')),
        (3, _('unknown')),
    )
    REGISTERED_BY = (
        (1, _('mobile')),
        (2, _('email')),
    )
    mobile_regex = RegexValidator(regex=r'^\+?1?\d{11}$', message="Mobile number must be 11 digit")
    mobile = models.CharField(
        validators=[mobile_regex],
        max_length=11,
        unique=True,
        null=True,
        blank=True
    )
    mobile_confirmed = models.BooleanField(default=False)
    avatar = models.ImageField(upload_to=avatars_path, null=True, blank=True)
    name = models.CharField(max_length=200, null=True)
    email = models.EmailField(null=True, blank=True)
    gender = models.PositiveSmallIntegerField(default=3, choices=GENDER)
    registered_by = models.PositiveSmallIntegerField(default=1, choices=REGISTERED_BY)
    is_admin = models.BooleanField(default=False)
    is_blocked = models.BooleanField(default=False)
    is_faked = models.BooleanField(default=False)
    complete_registration = models.BooleanField(default=False)
    birthday = jmodels.jDateField(null=True)
    use_application = models.BooleanField(default=False)
    last_login = models.DateTimeField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    role = models.JSONField(default=default_role)
    deaf = models.BooleanField(default=False)
    province_and_city = models.ForeignKey(
        'locations.City', on_delete=models.SET_NULL, null=True, related_name='users')
    expert = models.OneToOneField(
        'users.Expert', on_delete=models.SET_NULL, null=True, related_name='user', blank=True)

    objects = UserManager()

    USERNAME_FIELD = 'id'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f'{str(self.id)} : {str(self.name)} : {str(self.mobile)}'

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    def get_short_name(self):
        return self.mobile

    @property
    def is_staff(self):
        return self.is_admin

    #  Following line are for save folder name "ID" instead of "None"
    def save(self, *args, **kwargs):
        if self.pk is None:
            saved_image = self.avatar
            self.avatar = None
            super(User, self).save(*args, **kwargs)
            self.avatar = saved_image
        else:
            super(User, self).save(*args, **kwargs)

    def balance(self):
        deposits = self.transactions.filter(
            status=True, deposit__isnull=False, withdraw__isnull=True)
        withdraws = self.transactions.filter(
            status=True, deposit__isnull=True, withdraw__isnull=False)

        deposits_sum, withdraws_sum = 0, 0
        for deposit in deposits:
            deposits_sum += deposit.amount
        for withdraw in withdraws:
            withdraws_sum += withdraw.amount

        return str(deposits_sum - withdraws_sum)


class OTP(models.Model):
    mobile = models.CharField(max_length=11, null=True)
    otp = models.CharField(max_length=6, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{str(self.mobile)} : {str(self.otp)}'


# <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>< Experts

class Expert(models.Model):
    DEGREE = (
        (1, _('MSC')),
        (2, _('PHD'))
    )
    degree = models.PositiveSmallIntegerField(choices=DEGREE, null=True)
    counseling_types = ArrayField(models.CharField(max_length=200), default=list)
    certified_at = models.DateField(null=True)
    certification_id = models.PositiveIntegerField(null=True)
    accepts_insurance = models.BooleanField(default=False)
    call_interval_avg = models.PositiveIntegerField(default=0)  # Auto fill field.
    rate = models.PositiveSmallIntegerField(default=0)  # Auto fill field.
    is_verified = models.BooleanField(default=False)  # Auto fill field.
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    bio = models.TextField(null=True, blank=True)
    bio_video = models.FileField(
        upload_to=bio_path, null=True, blank=True, validators=[FileValidator(max_size=2*10000000,
                                                                             content_types=[
                                                                                 'video/mp4',
                                                                                 'video/x-matroska',
                                                                             ])])
    expertise = models.ManyToManyField('common.Clinic', related_name='experts')
    centers = models.ManyToManyField('common.Center', related_name='experts')
    title = models.ForeignKey(
        'users.Title', on_delete=models.SET_NULL, null=True, related_name='experts')

    def __str__(self) -> str:
        return f'{str(self.user.id)} - {str(self.user.name)}' if getattr(self, 'user', None) else '---'


class Verify(models.Model):
    status = models.BooleanField(default=False)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    staff = models.ForeignKey('users.User', on_delete=models.SET_NULL, null=True, related_name='+')
    expert = models.ForeignKey(
        'users.Expert', on_delete=models.SET_NULL, null=True, related_name='verifies')

    def save(self, *args, **kwargs):
        self.expert.is_verified = self.status
        self.expert.save()
        super(Verify, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return f'{str(self.expert.user.name)} - {str(self.status)}'


class Title(models.Model):
    title = models.CharField(max_length=250, null=True)


class Award(models.Model):
    title = models.CharField(max_length=200, null=True)
    year = models.PositiveSmallIntegerField(null=True)
    description = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)
    expert_profile = models.ForeignKey(
        'users.Expert',
        on_delete=models.SET_NULL,
        related_name='awards',
        null=True
    )

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']


class Organization(models.Model):
    name = models.CharField(max_length=150, null=True)
    level = models.CharField(max_length=100, null=True)
    document = models.FileField(upload_to=organization_path, null=True)
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)
    expert_profile = models.ForeignKey(
        'users.Expert',
        on_delete=models.SET_NULL,
        related_name='organizations',
        null=True
    )

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created_at']


class Education(models.Model):
    DEGREE = (
        (1, _('Diploma')),
        (2, _('Associate')),
        (3, _('Bachelor')),
        (4, _('Master')),
        (5, _('Doctorate')),
    )
    degree = models.PositiveSmallIntegerField(choices=DEGREE, default=1)
    school = models.CharField(max_length=100, null=True)
    year = models.PositiveSmallIntegerField(null=True)
    major = models.CharField(max_length=150, null=True)
    minor = models.CharField(max_length=150, null=True)
    document = models.FileField(upload_to=education_path, null=True)
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)
    expert_profile = models.ForeignKey(
        'users.Expert',
        on_delete=models.SET_NULL,
        related_name='educations',
        null=True
    )
    city = models.ForeignKey(
        'locations.City',
        null=True,
        on_delete=models.SET_NULL,
    )

    def __str__(self):
        return self.get_degree_display()


class WorkExperience(models.Model):
    months = models.PositiveSmallIntegerField(null=True)
    position = models.CharField(max_length=50, null=True)
    company = models.CharField(max_length=50, null=True)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)
    expert_profile = models.ForeignKey(
        'users.Expert',
        on_delete=models.SET_NULL,
        related_name='work_experiences',
        null=True
    )
    city = models.ForeignKey(
        'locations.City',
        null=True,
        on_delete=models.SET_NULL,
    )

    def __str__(self):
        return self.company
