from rest_framework import serializers

from users.serializers import UserSerializer
from .models import Post

class CreatePostSerializer(serializers.HyperlinkedModelSerializer):
    content = serializers.CharField(required=True)

    class Meta: 
        model=Post
        fields=('content', 'date_posted', 'id')


    #access request and attach user to post
    def create(self, validated_data):
        user = self.context['request'].user
        post = Post.objects.create(owner=user, **validated_data)
        return post


class RetrievePostSerializer(serializers.HyperlinkedModelSerializer):
    owner = UserSerializer()
    
    class Meta:
        model = Post
        fields=('content', 'date_posted', 'owner', 'id')