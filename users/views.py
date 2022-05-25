from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
import coreapi
import coreschema
from users.serializers import ResetPasswordSerializer, UserSerializer, UpdateUserSerializer
from rest_framework import viewsets, response
from rest_framework.views import APIView
from rest_framework.permissions import  AllowAny, IsAuthenticated, BasePermission
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.schemas import ManualSchema
from rest_framework.decorators import action


User = get_user_model()

class IsSuperUser(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.is_superuser

class IsOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user and obj == request.user 



class UserView(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, IsOwner]
    serializer_class = UserSerializer
    queryset = User.objects.all()

    # here it searches queryset basked on values in the url
    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        # obj = get_object_or_404(User, username=item) .../:username
        obj = get_object_or_404(User, pk=item)  #.../:pk
        self.check_object_permissions(self.request, obj)
        return obj

    #adding custom permission to different classes
    def get_permissions(self):
        if self.action == 'list':
            self.permission_classes = [IsSuperUser]
        if self.action == 'create':
            self.permission_classes = [AllowAny]
        return super(self.__class__, self).get_permissions()

    # adding this so cannot update password on update or partial_update
    def get_serializer_class(self):
        serializer_class = self.serializer_class
        if self.action == 'update' or self.action == 'partial_update':
            serializer_class = UpdateUserSerializer
        return serializer_class

    #custom action for resetting passwords
    @action(detail=True, methods=['put'], serializer_class=ResetPasswordSerializer)
    def reset_password(self, request, pk=None):
        user = self.get_object()
        serializer = ResetPasswordSerializer(data=request.data)
        if serializer.is_valid():
            if not user.check_password(serializer.data['old_password']):
                return response.Response({'old_password': 'wrong password'})
            user.set_password(serializer.validated_data['new_password'])
            user.save()
            return response.Response(status=203)
        else:
            return response.Response(serializer.errors,status=400)
            

class LogoutView(APIView):
    permission_classes=[IsAuthenticated]
    schema = ManualSchema(fields=[
        coreapi.Field(
            "refresh_token",
            required=True,
            location="path",
            schema=coreschema.String()
        )
    ])

    def post(self, request):
        try: 
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return response.Response(status=200)
        except Exception as e:
            return response.Response(status=400)
        

