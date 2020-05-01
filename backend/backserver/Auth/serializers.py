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

class LoginSerializer(serializers.Serializer):
    # validation으로만 이용할 것임!
    username = serializers.CharField(allow_null=False, allow_blank=False)
    password = serializers.CharField(allow_null=False, allow_blank=False)
    # def __init__(self, data, context):
    #     print(f"data : {data}")
    #     print("악!")
    
    # def validate(self, data):
        # # print(data['username'])
        # user = authenticate(username=data['username'], password=data['password'])
        # print(user)
        # print("여기까지요")
        # print(data)
        # return data
        # # if user and user.is_active():
        # #     return user
        # # raise serializers.ValidationError("틀륌..")

    def validate(self,data):
        user=authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("incorect asd")