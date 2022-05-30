from ast import Mod
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import CreatePostSerializer, RetrievePostSerializer
from .models import Post
from rest_framework.permissions import  IsAuthenticated

# Create your views here.
class PostView(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = CreatePostSerializer
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        serializer_class = self.serializer_class
        if self.action == 'list' or self.action == 'retrieve':
            serializer_class = RetrievePostSerializer
        return serializer_class
