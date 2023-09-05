from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import *
class ItemAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.endpoint = '/app/users/'
        self.user_name = 'test user'
        self.age = 26
        self.user_id = 1
    def test_get_all_users(self):
        response = self.client.get(f'{self.endpoint}')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_user(self):
        response = self.client.post(f'{self.endpoint}',{'name': self.user_name,'age':self.age}, format='json')
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)
        user_exists = User.objects.filter(name=self.user_name).first()
        self.assertEqual(user_exists.name, self.user_name)

    # def test_update_user(self):
    #     update_url = f'{self.endpoint}{self.user_id}/'
    #     response = self.client.put(update_url,{'name':'Kiran','age':30}, format='json')
    #     self.assertEqual(response.status_code,status.HTTP_200_OK)

    # def test_delete_object(self):
    #     delete_url =  f'{self.endpoint}{self.user_id}/'
    #     print(delete_url)
    #     response = self.client.delete(delete_url)
    #     self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
    #     self.assertFalse(YourModel.objects.filter(pk=self.model_instance.pk).exists())

       





