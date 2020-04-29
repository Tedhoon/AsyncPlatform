from django.urls import path
from .views import CommunityList, CommunityDetail

urlpatterns = [
    path('', CommunityList.as_view()),
    path('<int:pk>', CommunityDetail.as_view()),
]