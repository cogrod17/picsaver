# from django.shortcuts import render
# from django.core import serializers
from rest_framework import viewsets, response
from django.http import HttpResponse, JsonResponse
from yaml import serialize
from .serializers import ImageSerializer
from rest_framework import status 
from rest_framework.views import APIView
from rest_framework.permissions import  IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Image



# class UploadImage(viewsets.ModelViewSet):
#     queryset = Image.objects.all()
#     serializer_class = ImageSerializer
#     parser_classes =[MultiPartParser, FormParser]
#     permission_classes = [IsAuthenticated]

#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)


class UploadImage(APIView):
    queryset = Image.objects.all()
    permission_classes= [IsAuthenticated]
    parser_classes =[MultiPartParser, FormParser]
    serializer_class = ImageSerializer

    def post(self, request, format=None):
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return response.Response(serializer.data, status=status.HTTP_200_OK)
        else: 
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        l = self.queryset.filter(owner=request.user)
        serializer = ImageSerializer(l, many=True)
        return response.Response(serializer.data)
     