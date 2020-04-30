from rest_framework import serializers
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
# from rest_framework import status
# from rest_framework.response import Response

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # model = settings.AUTH_USER_MODEL
        fields = ('id', 'username', 'email',)

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwards = {'password': {'write_only': True}}
    

    def create(self, validated_data):
        print(f"validated_data = {validated_data}")
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        print(user)
        print("dsauidsjisadjksdaasdsdasddsad")
        return user
        # except:
        #     print("여기여기")
        # try:
        #     user = User.objects.create_user(validated_data
        # ['username'], validated_data['email'], validated_data['password'])

        # return user
        # except:
        #     return Response(status=status.HTTP_204_NO_CONTENT)