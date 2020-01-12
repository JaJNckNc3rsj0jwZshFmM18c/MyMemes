from rest_framework import serializers
from leads.models import postss



class PostssSerializer(serializers.ModelSerializer):
    class Meta:
        model = postss
        fields = ('descriptions',)
# Create your views here.
