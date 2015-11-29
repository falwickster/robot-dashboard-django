from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required
def main_dashboard(request):
    return render(request, 'Dashboard/main_dashboard.html', {})
