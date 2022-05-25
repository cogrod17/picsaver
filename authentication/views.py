from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import TokenUserSerializer


class LoginView(TokenObtainPairView):
    serializer_class = TokenUserSerializer