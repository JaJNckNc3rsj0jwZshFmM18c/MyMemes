from django.shortcuts import render

from leads.models import postss
from leads.serializers import PostssSerializer
from rest_framework import generics

class LeadListCreate(generics.ListCreateAPIView):
    queryset = postss.objects.all()
    serializer_class = PostssSerializer
