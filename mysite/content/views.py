from django.shortcuts import render
from rest_framework.views import APIView

# Create your views here.
from content.models import Recipient


class Dashboard(APIView):
    def get(self, request, number=None):
        context = {}

        if number:
            recipient = Recipient.objects.filter(user_id=number).first
            context = {'recipient': recipient}

        return render(request, "content/dashboard.html", context)   # Dashboard 화면


class UserProfile(APIView):
    def get(self, request, number=None):
        context = {}

        if number:
            recipient = Recipient.objects.filter(user_id=number).first
            context = {'recipient': recipient}

        return render(request, "content/user.html", context)     # user 화면


class Table(APIView):
    def get(self, request):
        recipients = Recipient.objects.all()
        context = {'recipients': recipients}

        return render(request, "content/table.html", context)    # table 화면

    def post(self, request):
        recipient_id = request.data.get('recipient_id', None)
        recipient = Recipient.objects.filter(user_id=recipient_id)
        context = {'recipient': recipient}

        return render(request, "content/dashboard.html", context)


class Notifications(APIView):
    def get(self, request):

        return render(request, "content/notifications.html")    # notifications 화면


#
# id = request.session.get('id', None)
#
# if id is None:
#     return render(request, "account/login.html")