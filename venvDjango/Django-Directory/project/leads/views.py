from django.shortcuts import render
from rest_framework.views import APIView

from leads.models import postss
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response 
from django.http import HttpResponse
from django.http import JsonResponse



from leads.serializers import PostssSerializer, PictureSerializer
from rest_framework import generics

class LeadListCreate(generics.ListCreateAPIView):
    queryset = postss.objects.all()
    serializer_class = PostssSerializer




class picture(APIView):
    parser_classes = (MultiPartParser, FormParser)
    queryset = postss.objects.all()
    serializer_class = PostssSerializer

      





    def get(self, request, *args, **kwargs):
        serializer = PictureSerializer(postss.objects.all(), many=True)
        
        return Response(serializer.data)


    def post(self, request, format=None):
        serializer = PictureSerializer(data=request.data, context={"request": request})


        
        if serializer.is_valid():

            
            serializer.save()

            print(serializer.data)
          
            return Response(serializer.data)

        else:
    

            print(serializer.errors)
            return Response("Error")




