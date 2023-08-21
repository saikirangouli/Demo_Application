from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def my_view(request):
    context = {}
    objects = [{"id":1,"name":"A"},{"id":2,"name":"B"}]
    context['status_code'] = '200'
    context['data'] = objects 
    return Response(context)
