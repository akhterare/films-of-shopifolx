from django.shortcuts import render
import requests
from rest_framework import viewsets
from .serializers import FilmSerializer
from .models import Film

def home(request):
    response = requests.get('http://freegeoip.net/json/')
    geodata = response.json()
    return render(request, 'core/home.html', {
        'ip': geodata['ip'],
        'country': geodata['country_name']
    })

class FilmView(viewsets.ModelViewSet):
    serializer_class = FilmSerializer
    queryset = Film.objects.all()
