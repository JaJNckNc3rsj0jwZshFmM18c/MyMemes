from django.contrib import admin


from .models import postss
from .models import video
from .models import accounts,Ip_Adresses,Pictures



admin.site.register(postss)
admin.site.register(video)
admin.site.register(accounts)
admin.site.register(Ip_Adresses)
admin.site.register(Pictures)
# Register your models here.
