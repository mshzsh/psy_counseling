from django.contrib import admin
from users.models import User,OTP,Expert,Title,Verify

admin.site.register(User)
admin.site.register(Expert)
admin.site.register(Title)
admin.site.register(Verify)
admin.site.register(OTP)
