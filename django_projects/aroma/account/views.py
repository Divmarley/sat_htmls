from django.shortcuts import render
from django.views.generic import View

# Create your views here.
# login view 
class LoginView(View):
    def get(self,request):
        template_name='accounts/auth/login.html'
        context={}
        return render(request,template_name,context)
    
    
    def post(request):
        pass






# logout view 





# signup view