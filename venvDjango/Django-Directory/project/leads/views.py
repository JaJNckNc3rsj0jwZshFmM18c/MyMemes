from django.shortcuts import render
from rest_framework.views import APIView

from leads.models import postss
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response 
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import AllowAny



from leads.serializers import PostssSerializer, PictureSerializer, AccountsSerializer
from rest_framework import generics

from rest_framework.generics import ListAPIView

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
        print(serializer.initial_data)

        
        if serializer.is_valid():

            
            serializer.save()

            print(serializer.data)
          
            return Response(serializer.data)

        else:
    

            print(serializer.errors)
            return Response("Error")





class ApiRegister(APIView):
    serializer_class = AccountsSerializer
    permission_classes = [AllowAny]


    def post (self, request, format=None):
        serializer = AccountsSerializer(data= request.data)

        print(request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()

            return Response(serializer.data)

        else:

            print("hello")
            return Response("Error")
        
 

        



class ApiPostView(ListAPIView):

    queryset = postss.objects.all() 
    serializer_class = PostssSerializer
    pagination_class = PageNumberPagination
    

