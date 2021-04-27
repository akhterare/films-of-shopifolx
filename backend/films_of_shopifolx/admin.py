from django.contrib import admin
from .models import Film

class FilmAdmin(admin.ModelAdmin):
    list_display = ('title', 'year', 'poster', 'imdb_id')

# Registering models
admin.site.register(Film, FilmAdmin)