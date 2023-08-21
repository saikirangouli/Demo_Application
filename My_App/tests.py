from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
class ItemAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.endpoint = '/'
    def test_get_item_detail(self):
        response = self.client.get(f'{self.endpoint}')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


# Create your tests here.
