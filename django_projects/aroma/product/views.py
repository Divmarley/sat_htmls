from django.shortcuts import render

# Create your views here.

def product_view(request):
    template_name='product.html'
    context={}
    return render(request,template_name,context)