from .models import Community
from .serializers import CommunitySerializer

from django.shortcuts import render
# from django.views.decorators.csrf import csrf_exempt

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# @csrf_exempt
class CommunityList(APIView):
    def get(self, request, format=None):
        queryset = Community.objects.all()
        serializer = CommunitySerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = CommunitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
