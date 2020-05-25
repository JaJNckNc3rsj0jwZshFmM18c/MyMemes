from rest_framework import serializers
from leads.models import postss



class PostssSerializer(serializers.ModelSerializer):
    class Meta:
        model = postss
        fields = ('descriptions', 'Pictures_file','GIFS_String' , 'Videos_file')
# Create your views here.



class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = postss
        fields = ( 'descriptions', 'Pictures_file', 'GIFS_String', 'Videos_file')

