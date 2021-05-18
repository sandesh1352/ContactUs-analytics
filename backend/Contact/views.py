from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import APIView

import datetime
from django.db.models import Count
from django.db.models import Q

from .models import Data
from .serializers import DataSerializer

# Create your views here.

class Question(APIView):
    def get(self, request):
        queryset = Data.objects.all()
        serializer_object = DataSerializer(queryset, many=True)

        return Response(serializer_object.data)


class Ask(APIView):
     def post(self,request):
        new_question =  request.data
        serializer_object = DataSerializer(data = new_question)
        
        if serializer_object.is_valid():
            serializer_object.save()
            return Response({"message":"post successfully"})
        else:
            return Response(serializer_object.errors)


class SelectDate(APIView):
    def post(self, request):
        start_date = request.data["start_date"]
        end_date = request.data["end_date"]

        # start_year = int(start_date[0:4])
        # start_month = int(start_date[5:7])
        # start_date = int(start_date[8:10])

        # end_year = int(end_date[0:4])
        # end_month = int(end_date[5:7])
        # end_date = int(end_date[8:10])

        # sample = Data.objects.filter(Q(date__gte=datetime.date(start_year, start_month, start_date)) & Q(date__lte=datetime.date(end_year, end_month, end_date))).extra({'date': "date(date)"}).values('date').annotate(Count=Count('pk'))
        # return Response(list(sample))
        format = "%Y-%m-%d"

        start1_obj = datetime.datetime.strptime(start_date, format)
        end1_obj = datetime.datetime.strptime(end_date, format)

        sample = Data.objects.filter(Q(date__gte=start1_obj) & Q(date__lte=end1_obj)).extra({'date':"date(date)"}).values('date').annotate(Count = Count("pk"))
        return Response(list(sample))

    

