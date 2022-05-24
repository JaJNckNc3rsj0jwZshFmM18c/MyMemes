from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login,logout
from .models import postss,video,accounts,Ip_Adresses
from .Changing_Date import transforming_date
from django.views import generic
from django.views.generic.edit import CreateView
from .forms import CommentForm,ReplyComment,Upload
from django.db.models import F
from django.contrib.auth.models import User
import json
from datetime import datetime 
from django.db.models import Q
import re
#from django.utils import timezone
#from pytz import timezone
import pytz
from django.utils import timezone






# Create your views here.

def index(request):
    
    array = ["1","3"]
    script = ''
    print(datetime.now())
    

    k = postss.objects.all()
    
    context = {"k":k}
    
    return render(request, 'personal/home.html',context)
#return render(request, 'personal/videos.html',context)



class videoss(CreateView):
    
    model = video
    k = video.objects.all()
    context = {"k":k}
    fields = ['comments']





def PostCreated(request):
    
    form = Upload()
    context = {"form":form}
    #Video = postss.objects.get(pk = Comment_id)
    print("hello from PostCreated")
    if request.method == 'POST':
        form = Upload(request.POST)
        print("hello from if request")
        print(form.is_valid())
        print(form.errors)

        if form.is_valid():
            
            print("hello from form is valid")
            #Video.Author = request.user

            #Video.save()
            
            
            form.save()
   
    
    
    return render(request, 'personal/postss_form.html',context)

def Button(request,Comment_id):

    comment_id = Comment_id

    Video = postss.objects.get(pk = Comment_id)

    if request.method == 'POST':
        
        
       
        
        form = CommentForm(request.POST)
        if form.is_valid():
            
            #commits false because it wants to change
            comment = form.save(commit=False)
            #it sets the object to  a specific video ID.
            comment.comments = Video
            
            
            comment.save()
            return HttpResponse(comment.message)

            

    


def videos(request, album_id):


    likedpost = postss.objects.get(pk=album_id)
    Video = postss.objects.get(pk = album_id)
    u = User.objects.get(username=request.user)
    #print(request.user)


    
    
            
    k = video.objects.all()

    form = CommentForm()
    Reply_Form = ReplyComment
        

    

    Checking_IP = Ip_Adresses.objects.all()

    Addr = Ip_Adresses()
    

    

    print(request.__dict__)
    
    if Ip_Adresses.objects.filter(Ip_A= request.META.get("REMOTE_ADDR")):

        Ip_c =  Ip_Adresses.objects.get(Ip_A= request.META.get("REMOTE_ADDR"))
            
        
        
        t = Ip_c.Last_time_watched
        time = datetime.now()
        
        Time_Past = transforming_date(t)
        Time_Now = time.hour

        
        
       # Time_Now = transforming_date(str(datetime.now))

        Dif_time = Time_Past[0] - Time_Now

        print(Dif_time)

        if Dif_time == 1 and Time_Past[1] > time.minute:

            #remove the ip from the database 
            #checking_IP.Ip_A.delete()
            Ip_Adresses.objects.get(Ip_A= request.META.get("REMOTE_ADDR")).delete()
            
            Video.viewss  += 1
            Video.save()

        
       
    else:

        Video.viewss  += 1
        Video.save()
        #Addr.Ip_A = request.META.get("REMOTE_ADDR")
        #Addr.save()
            
        

    if  u not in likedpost.Who_like.all():
        likedpost.Text_Button = "Like"

        likedpost.save()

    if  u in likedpost.Who_like.all():
        likedpost.Text_Button = "Unlike"
        likedpost.save()

        
    print(Video.post_file.url)
    context = {"k":k, "form":form, "Video":Video, "Reply_Form":Reply_Form,"u":u,"likedpost":likedpost, "Checking_IP":Checking_IP,"album_id" :album_id }
    return render(request, 'personal/videos.html',context)

 
def likePost(request):
    user = User.objects.get(username=request.user)

    if request.method == 'GET':


        user = User.objects.get(username=request.user)
        #usr = user.accounts

        
        
        
        post_id = request.GET['post_id']
        likedpost = postss.objects.get(pk=post_id)
        
      
        if  user not in likedpost.Who_like.all():


           

            likedpost.Who_like.add(user)
            
            
           
           # Usr.liked_or_not = True

            #Usr.save()

        

        
        #put value one  in users column 
        #Check if the user has value one, if that is the case then that means the user already liked the video
        #IF the user has no value one then  user can like it 
        
        #Put unlike button
        #when you press unlike button it will minus one the database
        #check if usr.liked_or_not is true
        # if it is true then that means the user can only unlike 
        
            likedpost.likes += 1
            likedpost.Text_Button = "Unlike"

            likedpost.save()

            JsonFile_Liked = {}
            JsonFile_Liked ['Likes'] = f"Likes:{likedpost.likes}"
            JsonFile_Liked ['TextButton'] = "Unlike"

            Likedd =  json.dumps(JsonFile_Liked)

            return HttpResponse (Likedd)

        if  user in likedpost.Who_like.all():
            
            likedpost.Who_like.remove(user)
            likedpost.likes -= 1
            likedpost.Text_Button = "Like"

            likedpost.save()
     
            JsonFiles_Unliked = {}
            JsonFiles_Unliked['Likes'] = f"Likes:{likedpost.likes}"
            JsonFiles_Unliked['TextButton'] = "Like"

            UnLikedd = json.dumps(JsonFiles_Unliked)
            return HttpResponse(UnLikedd)

def search(request):

    print("hello")
    query = request.GET.get('q')

    results = postss.objects.filter(Q(title__icontains=query))

    context = {"results":results}

    #"url 'personal':search"

    return render(request, "personal/Search.html", context)
   


def logout_request(request):
    logout(request)

    return render(request, 'personal/home.html')




def UserPage(request, Channel_id):
    
    Users = User.objects.get(pk = Channel_id)

    Authors = postss.objects.filter(Author=Users).all()#filter(Q(Author__icontains = Users))

    print(type(Authors))

    context = {"Authors":Authors}
    if request.GET.get('Follow') == 'Follow':

        User_account = accounts.objects.get(pk=1)
        User_account.Following.add(Users)
        User_account.save()
        Channel_account = accounts.objects.get(pk=Channel_id)
        Channel_account.subscribers += 1
        Channel_account.save()

    return render(request, 'personal/channel.html',context)


def subs(request):

    User_account = accounts.objects.get(pk=1)

    list_followers= []

    for i in User_account.Following.all():
        list_followers.append(i)

    follows = postss.objects.filter(Author__in=list_followers).all()
    context = {'follows':follows}


    return render(request,'personal/Subscriptions.html', context)




def Treanding_Page(request):
    utc = pytz.utc
    time = re.split("\s",str(datetime.now()))       
    print(time[0])
    Trending_Pagee = postss.objects.order_by('-viewss')
    Trending_Page = Trending_Pagee.filter(PostDate__date = "2019-07-30" )
    context = {'Trending_Page':Trending_Page}

    return render(request,'personal/TrendingPage.html',context)

def most_liked(request):
    Liked_most = postss.objects.order_by('-likes')
    context = {"Liked_most":Liked_most}

    return render(request,'personal/MostLiked.html',context)





    




