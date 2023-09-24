from django.contrib import admin
from transactions.models import Transaction, Deposit, Withdraw

admin.site.register(Transaction)
admin.site.register(Deposit)
admin.site.register(Withdraw)
