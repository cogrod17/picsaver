from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model





# Register your models here
User = get_user_model()
# admin.site.register(User)

class UserAdminConfig(UserAdmin):
    model = User
    search_fields = ('username', 'email','first_name', 'last_name',)
    list_display = ('username', 'email','first_name', 'last_name', 'id')
    add_fieldsets = (
        (None, {
            'fields': ('email', 'username', 'password1', 'password2')}
         ),
    )




admin.site.register(User, UserAdminConfig)


