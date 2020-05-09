from django.db import models
from django.conf import settings


class Community(models.Model):
    title = models.CharField(max_length = 100)
    desc = models.TextField(max_length = 100)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, related_name="community")

    # def __str__(self):
    #     return self.title
