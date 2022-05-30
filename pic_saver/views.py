from rest_framework import response
from .serializers import ImageSerializer
from rest_framework import status 
from rest_framework.permissions import  IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Image
from rest_framework.generics import GenericAPIView


class ImageView(GenericAPIView):
    queryset = Image.objects.all()
    permission_classes= [IsAuthenticated]
    parser_classes =[MultiPartParser, FormParser]
    serializer_class = ImageSerializer
    
    def post(self, request, format=None):
        serializer = self.get_serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return response.Response(serializer.data, status=status.HTTP_200_OK)
        else: 
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        l = self.queryset.filter(owner=request.user)
        serializer = ImageSerializer(l, many=True)
        return response.Response(serializer.data)
     
 