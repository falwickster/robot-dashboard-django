from django.shortcuts import render

def main_dashboard(request):
    return render(request, 'Dashboard/main_dashboard.html', {})
