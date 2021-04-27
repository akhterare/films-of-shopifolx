from django.db import models

class Film(models.Model):
    title = models.CharField(max_length=120)
    year = models.IntegerField()
    poster = models.URLField()
    imdb_id = models.IntegerField(default=None)

class Nomination(models.Model):
    imdb_id = models.ForeignKey('Film', on_delete=models.CASCADE)
    