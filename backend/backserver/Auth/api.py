from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
# from django.views.decorators.csrf import csrf_exempt
from rest_framework import status

# @csrf_exempt
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        print(request.user)
        print(request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            
            return Response({
                "user" : UserSerializer(
                    user, context=self.get_serializer_context()).data, 
                "token" : AuthToken.objects.create(user)[1]
            })
        
        else:
            print("400 뙇")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer
    # permission_classes = [AllowAny, ]

    # def post(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data) 
    #     # serializer = LoginSerializer(data=request.data)
    #     if serializer.is_valid(raise_exception=True):
            
    #         user = serializer.validated_data
    #         # 근데 굳이 이렇게 메서드로 빼야하냐.....;;;

    #         print(user)
    #         return Response({
    #                 "user" : UserSerializer(
    #                     user, context=self.get_serializer_context()).data,
    #                 "token" : AuthToken.objects.get(user=User.objects.filter(username=user['username']).first())
    #                 # 로그인마다 다시 생성..?!
    #             })
    #     else:
    #         print("else")
    def post(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        if serializer.is_valid():
            user=serializer.validated_data
            return Response({
                "user":UserSerializer(user,context=self.get_serializer_context()).data,
                # "token":AuthToken.objects.create(user)
                "token":AuthToken.objects.create(user)[1]
                #u need to add [1] because The Token.objects.create returns a tuple (instance, token). So in order to get token use the index 1
            })
        else:
            return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)



# user를 get해주는 api
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [ permissions.IsAuthenticated, ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
    
    # 잘 알아두자... 인증 실패면 403이다!!! 아오!!!
