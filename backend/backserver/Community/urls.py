from django.urls import path
from .views import CommunityList,CommunityCreate, CommunityDetail

urlpatterns = [
    path('', CommunityList.as_view()),
    path('<int:pk>', CommunityDetail.as_view()),
    path('create', CommunityCreate.as_view()),
]