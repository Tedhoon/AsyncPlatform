from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer
# from django.views.decorators.csrf import csrf_exempt
from rest_framework import status

# @csrf_exempt
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        print(request.user)
        print("user^^^^^")
        print(request.data)
        print("data^^^^^")
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            print("왔나?")
            
            return Response({
                "user" : UserSerializer(
                    user, context=self.get_serializer_context()).data, 
                "token" : AuthToken.objects.create(user)[1]
            })
        
        else:
            print("400 뙇")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)