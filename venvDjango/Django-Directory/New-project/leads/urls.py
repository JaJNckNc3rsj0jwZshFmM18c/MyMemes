from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
        path('api/profilePicture', views.ProfileAPIView.as_view()),path('api/register', views.ApiRegister.as_view()),  path('logout/', views.Logout.as_view()),    path('api/lead/', views.LeadListCreate.as_view() ),path('api/pictures/', views.picture.as_view(),  ),  path('api/posts/', views.ApiPostView.as_view(),  )
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
