from django.conf.urls import url
from . import views

urlpatterns = [
               url(r'^$', views.index, name='index'),
               
               
               #url(r'^(?p <user>[0-9]+ [A-Z] ' views.User)
                url(r'^post/', views.PostCreated, name='postsss'),
               url(r'^posts/(?P<album_id>[0-9]+)$', views.videos, name='my-increment-view'), url(r'^likepost/$', views.likePost, name="likepost"),
               url(r'^comments/(?P<Comment_id>[0-9]+)$', views.Button, name='comment'),
               url(r'^results/$', views.search, name="search"), url(r'^LogOut/$', views.logout_request, name= "LogOut"),
               url(r'^user/(?P<Channel_id>[0-9]+)$', views.UserPage, name= "user"), url(r'^Subscriptions/$', views.subs, name="subs"), url(r'^TrendingPage/$', views.Treanding_Page, name="trending"),
                url(r'^mostLiked/$', views.most_liked, name="trending")
               
               
               ]
#,url(r'^unlikepost/$', views.unlikePost, name="unlikepost")  