from django.db import models

# Create your models here.


class User(models.Model):
    id = models.CharField(primary_key=True, max_length=16, unique=True)
    password = models.CharField(max_length=255)
    username = models.CharField(max_length=20)
    gender = models.CharField(max_length=8, default='')
    phonenumber = models.CharField(max_length=11)
    relationship = models.CharField(max_length=8)
    email = models.CharField(max_length=254)
    membertype = models.IntegerField()
    recipient_id = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'user'



