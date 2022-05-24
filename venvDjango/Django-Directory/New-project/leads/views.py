from django.shortcuts import render
from rest_framework.views import APIView

from leads.models import postss,accounts
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response 
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view,authentication_classes,permission_classes
from rest_framework.authentication import SessionAuthentication, BasicAuthentication





from leads.serializers import PostssSerializer, PictureSerializer, AccountsSerializer,ProfileSerializer
from rest_framework import generics

from rest_framework.generics import ListAPIView
from rest_framework.generics import RetrieveAPIView

class LeadListCreate(generics.ListCreateAPIView):
    queryset = postss.objects.all()
    serializer_class = PostssSerializer



class ProfileAPIView( generics.RetrieveAPIView):   
    serializer_class = ProfileSerializer
    parser_classes = (MultiPartParser, FormParser)

    def get_object(self):
        print(accounts.objects.get(user=self.request.user))
        return accounts.objects.get(user=self.request.user)




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

class Logout(APIView):
    def get(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        

class ApiRegister(APIView):
    serializer_class = AccountsSerializer
    permission_classes = [AllowAny]
   
    

    def post (self, request, format=None):

        dataInformation = {
    "Profile_picture": request.data["Profile_picture"],
    "user": {
        "email": request.data["email"],
        "password": request.data["password"],
        "username": request.data["username"], },
        }
        serializer = AccountsSerializer(data= dataInformation)
        
        if serializer.is_valid(raise_exception=True):
            serializer.save()

            return Response(serializer.data)

        else:
            return Response("Error")
        
 

        



class ApiPostView(ListAPIView):
    
    queryset = postss.objects.all() 
    serializer_class = PostssSerializer
    pagination_class = PageNumberPagination

    def get(self, request):
        print("dffffffff")

    
   

