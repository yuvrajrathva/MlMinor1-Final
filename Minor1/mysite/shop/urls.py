from django.urls import path
from . import views

urlpatterns = [
    path('customerForm.html/', views.predictor, name = 'predictor'),
    path('', views.homepage, name = 'homepage'),
    path('customer/', views.customer, name = 'customer'),
    path('retailer/', views.retailer, name = 'retailer'),
    path('django_view_name/', views.django_view_name, name = 'django_view_name'),
]