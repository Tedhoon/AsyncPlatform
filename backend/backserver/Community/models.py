from django.db import models
from django.contrib.auth.models import User


class Community(models.Model):
    title = models.CharField(max_length = 100)
    desc = models.TextField(max_length = 100)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name="community")

    # def __str__(self):
    #     return self.title
