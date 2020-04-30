from django.urls import path, include
from .api import RegisterAPI
from knox import views as knox_views
# from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('', include('knox.urls')),
    path('register', RegisterAPI.as_view()),
]
