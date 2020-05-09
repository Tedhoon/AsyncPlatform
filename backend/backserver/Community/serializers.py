from rest_framework import serializers
from .models import Community

class CommunitySerializer(serializers.ModelSerializer):

    author_name = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Community
        fields = ('id', 'title', 'desc', 'author_name')
        