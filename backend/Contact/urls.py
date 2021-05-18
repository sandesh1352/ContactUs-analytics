from django.urls import path
from . import views

urlpatterns = [
    path('getQuestions/',views.Question.as_view()),
    path('postquestion/',views.Ask.as_view()),
     path('Analytics/',views.SelectDate.as_view())
]
