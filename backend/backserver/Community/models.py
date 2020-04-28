from django.db import models

class Community(models.Model):
    title = models.CharField(max_length = 100)
    desc = models.TextField(max_length = 100)

    # def __str__(self):
    #     return self.title
