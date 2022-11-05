from django.urls import path
from .views import index_view,contact_view         
app_name='app_core'
urlpatterns = [
    path('',index_view, name="index"),
    path('contact',contact_view, name="contact")
    
]
