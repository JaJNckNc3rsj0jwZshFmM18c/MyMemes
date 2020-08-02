from rest_framework import serializers
from leads.models import postss
from leads.models import accounts
from django.contrib.auth.models import User




class PostssSerializer(serializers.ModelSerializer):
    class Meta:
        model = postss
        fields = ('descriptions', 'Pictures_file','GIFS_String' , 'Videos_file')
# Create your views here.


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = accounts
        fields = ["id", "Profile_picture"]


class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = postss
        fields = ( 'descriptions', 'Pictures_file', 'GIFS_String', 'Videos_file')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "password"]




class AccountsSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)

    class Meta:
        model = accounts
        fields = ["user", "Profile_picture"]

    def create(self, validated_data):
       print(validated_data) 
       user_data = validated_data.pop('user', None) 
       user = User.objects.create_user(**user_data) 

       
       return accounts.objects.create(user=user, **validated_data)