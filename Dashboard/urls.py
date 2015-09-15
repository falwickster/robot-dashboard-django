from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.main_dashboard, name='main_dashboard'),
]
