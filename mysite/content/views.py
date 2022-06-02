from django.shortcuts import render
from rest_framework.views import APIView

# Create your views here.

class Dashboard(APIView):
    def get(self, request):
        return render(request, "content/dashboard.html") # Dashboard 화면


class UserProfile(APIView):
    def get(self, request):
        return render(request, "content/user.html")     # user 화면


class Table(APIView):
    def get(self, request):
        return render(request, "content/table.html")    # table 화면


class Notifications(APIView):
    def get(self, request):
        return render(request, "content/notifications.html")    # notifications 화면