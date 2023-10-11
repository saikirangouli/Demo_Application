from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import *
class ItemAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.endpoint = '/app/users/'
        self.user_data = {'name':'normal user','age':25}
        self.normal_user_object = User.objects.create(**self.user_data)
        self.user_name = 'test user'
        self.age = 26
        self.user_id = 1
        self.updated_user_name = 'Updated test user'
        self.updated_age=23
    def test_get_all_users(self):
        response = self.client.get(f'{self.endpoint}')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    def test_get_specific_user(self):
        response = self.client.get(f'{self.endpoint}{self.normal_user_object.pk}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_user(self):
        response = self.client.post(f'{self.endpoint}',{'name': self.user_name,'age':self.age}, format='json')
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)
        user_exists = User.objects.filter(name=self.user_name).first()
        self.assertEqual(user_exists.name, self.user_name)

    def test_update_user(self):
        print(f'{self.endpoint}{self.normal_user_object.pk}')
        response = self.client.put(f'{self.endpoint}{self.normal_user_object.pk}/',{'name': self.updated_user_name,'age':self.updated_age}, format='json')
        print(response.status_code)
        self.assertTrue(User.objects.filter(name=self.updated_user_name).exists())
        
    def test_delete_user(self):
        self.assertTrue(User.objects.filter(name=self.user_data['name']).exists())
        response = self.client.delete(f'{self.endpoint}',{'name': self.user_name}, format='json')
        self.assertFalse(User.objects.filter(name=self.user_name).exists())

    



       











