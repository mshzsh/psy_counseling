from django.contrib import admin
from common.models import Clinic, Center, Comment, Like, CenterLocation, Tag, ReportComment

admin.site.register(Clinic)
admin.site.register(Center)
admin.site.register(CenterLocation)
admin.site.register(Comment)
admin.site.register(ReportComment)
admin.site.register(Like)
admin.site.register(Tag)
