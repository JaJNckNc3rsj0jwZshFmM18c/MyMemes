from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import login
from .models import postss,video,accounts,Ip_Adresses
from .Changing_Date import transforming_date
from django.views import generic
from django.views.generic.edit import CreateView
from .forms import CommentForm,ReplyComment,Upload
from django.db.models import F
from django.contrib.auth.models import User
import json
import datetime


Checking_IP = Ip_Adresses()
       

for i  in  Checking_IP.Ip_A:

    for t in Checking.Last_time_watched:
        
        print(t,i)



       


