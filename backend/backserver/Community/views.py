from .models import Community
from .serializers import CommunitySerializer

from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.http import Http404
from django.contrib.auth.models import User

class CommunityList(APIView):
    # permission_classes = [ permissions.IsAuthenticated, ]

    def get(self, request, format=None):
        queryset = Community.objects.all()
        serializer = CommunitySerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CommunityCreate(CreateAPIView):
    permission_classes = [ permissions.IsAuthenticated, ]
    def post(self, request, format=None):
        
        serializer = CommunitySerializer(data=self.request.data)
        # print(self.request.META)
        # print(request.data)
        # print(f"{self.request.user} 이거!!")
    
        if serializer.is_valid():
            serializer.save(author=self.request.user)
                            # author = request.user해주면 될 듯!
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class CommunityDetail(APIView):
    permission_classes = [ permissions.IsAuthenticated, ]
    def get_object(self, pk):
        try:
            return Community.objects.get(pk=pk)
        except Community.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def get(self, request, pk, format=None):
        print(self.request.user)
        print("******************88")
        community = self.get_object(pk)
        serializer = CommunitySerializer(community)
        return Response(serializer.data)

    # def put(self, request, pk, format=None):
    #     community = self.get_object(pk)
    #     serializer = CommunitySerializer(serializer, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        # author권한 줘야한다요
        community = self.get_object(pk)
        community.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)