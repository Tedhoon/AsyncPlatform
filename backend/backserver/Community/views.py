from .models import Community
from .serializers import CommunitySerializer

from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework import status, permissions, pagination
from django.http import Http404
from django.contrib.auth.models import User

class ComPagination(pagination.PageNumberPagination):
    def __init__(self):
        print("이닛!!")
    page_size = 5


class CommunityList(ListAPIView):
    # permission_classes = [ permissions.IsAuthenticated, ]
    
    # def get(self, request, format=None):
    #     queryset = Community.objects.all().order_by('-id')
    #     pagination_class = ComPagination()
    #     serializer = CommunitySerializer(queryset, many=True)
    #     return Response(serializer.data, status=status.HTTP_200_OK)
    queryset = Community.objects.all()
    pagination_class = ComPagination
    serializer_class = CommunitySerializer


class CommunityCreate(CreateAPIView):
    permission_classes = [ permissions.IsAuthenticated, ]
    def post(self, request, format=None):
        serializer = CommunitySerializer(data=self.request.data)
    
        if serializer.is_valid():
            serializer.save(author=self.request.user)
                            # author = request.user해주면 될 듯!
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class CommunityUpdate()


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

    def put(self, request, pk, format=None):
        print(self.request.user)
        print("풋!")
        community = self.get_object(pk)
        if self.request.user == community.author:
            serializer = CommunitySerializer(community, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


    def delete(self, request, pk, format=None):
        community = self.get_object(pk)
        if self.request.user == community.author:
            community.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
            
       