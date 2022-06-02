from django.db import models

# Create your models here.


class Recipient(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=16)
    contact = models.IntegerField()
    gender = models.CharField(max_length=4)
    email = models.CharField(max_length=255, blank=True, null=True)
    address = models.CharField(max_length=45)
    birth = models.DateField()
    status = models.CharField(max_length=8)
    create_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'recipient'
