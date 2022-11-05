from django.shortcuts import render

# Create your views here.

def index_view(request):
    template_name = 'index.html'
    context ={}
    return render(request,template_name, context)


def contact_view(request):
    template_name = 'contact.html'
    context ={}
    return render(request,template_name, context)