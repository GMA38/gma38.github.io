from django.conf import settings
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.core.mail import send_mail
# Create your views here.

def index(request):
    return render(request, 'index.html')


def signup(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirmpassword = request.POST['password2']

        if User.objects.filter(username=username):
            messages.error(request, 'username already exist, try another username.')
            return redirect('index')
        
        if User.objects.filter(email=email):
            messages.error(request, 'Email already registered!!')
            return redirect('index')
        
        if len(username)>10:
            messages.error(request, 'Username should be less than 10 characters.')
            return redirect('index')
        
        if password != confirmpassword:
            messages.error(request, 'Password does not match')
            return redirect('index')
        
        if not username.isalnum():
            messages.error(request, 'Username name must be Alpha:numeric.')
            return redirect('index')



        myuser = User.objects.create_user(username, email, password)

        myuser.save()

        messages.success(request, 'Your Account was successfully created.')

        #Welcome email
        subject = 'Welcome to my Page'
        message = "Hello " + myuser.first_name + "!! \n" + "Welcome to my Page \n Thank you for visiting our website \n We have also sent you a link to activate your account \n Thanking you \n Prof GMA."
        from_email = settings.EMAIL_HOST_USER
        to_list = [myuser.email]

        send_mail(subject, message, from_email, to_list, fail_silently= True) 
        return redirect(index)
    return render(request, 'signup.html', )

def signin(request):
    
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            return render(request, 'index.html')
        else:
            messages.error(request, 'Bad Credentials')
            return redirect('todaysbooking')
    return render(request, 'todaysbooking.html')

def signout(request):
    logout(request)
    messages.success(request, 'Logged out successful')
    return redirect('index')
    
def todaysBooking(request):
    return render(request, 'todaysbooking.html')



