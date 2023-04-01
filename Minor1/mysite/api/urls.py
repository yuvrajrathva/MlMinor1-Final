from django.urls import path
from .views import PredictViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

urlpatterns = [
    path('predict/', PredictViewSet.as_view(), name = 'predict'),
]