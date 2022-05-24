from django.db import models
from django.contrib.auth.models import User
from datetime import datetime 
from django.utils import timezone  
import pytz
import re






class postss(models.Model):
    #start_date = models.DateTimeField(auto_now_add= True)
    Author =  models.ForeignKey(User, on_delete=models.CASCADE, default='', null=True, related_name= "memster") 
    post_file = models.FileField()
    Who_like = models.ManyToManyField(User)
    
    descriptions = models.CharField(max_length=1000)
    viewss = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    Text_Button = models.TextField(default="Like" , max_length = 100000)
    dislikes = models.CharField(max_length = 1000000000)
    Thumbnail = models.FileField()
    title = models.CharField(max_length=30)
    PostDate = models.DateTimeField(default=datetime.now(), blank=True)
     #models.ForeignKey(User, on_delete=models.CASCADE, default='', null=True)
    def __str__(self):
        #return self.start_date
        return self.descriptions
        return self.Author
        return self.views
        return self.Who_like
        return self.Post_Date
        




class accounts(models.Model): 
        
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='accounts')
    Profile_picture =  models.FileField(default="blah.jpg")
    email = models.CharField(max_length=100,default="Malcom2000@live.se")
    Following = models.ManyToManyField(User, related_name='account')  
    Liked_or_Not = models.BooleanField(default=False)
    #profile_picture = models.CharField(max_length=40)
    about = models.CharField(max_length = 10000)
    subscribers = models.IntegerField(default = 0)
    videos = models.CharField(max_length = 100000000 ,default = 0) 
    subscriptions =  models.ManyToManyField(User, related_name='accountss')


class Ip_Adresses(models.Model):
    Ip_A = models.CharField(max_length = 1000000)
    Last_time_watched = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):

        return self.Ip_A
        return self.Last_time_watched


class Pictures(models.Model):


    Logo_Pic = models.FileField()


    






class video(models.Model):

    comments = models.ForeignKey(postss, related_name='comments', on_delete=models.CASCADE)
    author =  models.CharField(max_length=30)#models.ForeignKey(User, on_delete=models.CASCADE, default='', null=True)
    message = models.TextField(blank=True, default='') #models.TextField(blank=True, default='')
    reply_comments = models.TextField(blank=True, default='')
    def __str__(self):
        return self.message
        return self.reply_comments




    





