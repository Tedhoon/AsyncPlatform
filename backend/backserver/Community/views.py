from .models import Community
from .serializers import CommunitySerializer

from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class CommunityList(APIView):
    def get(self, request, format=None):
        queryset = Community.objects.all()
        serializer = CommunitySerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

