from rest_framework import serializers
from leads.models import postss
from leads.mdoels import accounts



class PostssSerializer(serializers.ModelSerializer):
    class Meta:
        model = postss
        fields = ('descriptions', 'Pictures_file','GIFS_String' , 'Videos_file')
# Create your views here.



class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = postss
        fields = ( 'descriptions', 'Pictures_file', 'GIFS_String', 'Videos_file')



class AccountsSerializer(serializers.ModelSerializers):
    class Meta:
        model = accounts 
        fields = ('')
        
        extra_kwargs = {


            'password': {'write_only': True}
        }