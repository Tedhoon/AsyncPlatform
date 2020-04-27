from django.urls import path
from .views import CommunityList

urlpatterns = [
    path('', CommunityList.as_view()),
]