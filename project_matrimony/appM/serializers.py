from rest_framework import serializers
from django.contrib.auth import get_user_model
import random
import string
from django.core.mail import send_mail
from .models import *

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'first_name', 'phone', 'address', 'country', 'state', 'district']

    def create(self, validated_data):
        # Generate a random 6-digit number as the password
        password = ''.join(random.choices(string.digits, k=6))
        
        # Create the user
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            password=password,
            email=validated_data['email'],
            first_name=validated_data.get('first name', ''),
            phone=validated_data.get('phone', ''),
            address=validated_data.get('address', ''),
            country=validated_data.get('country', ''),
            state=validated_data.get('state', ''),
            district=validated_data.get('district', '')
        )

        # Send confirmation email
        send_mail(
            'Registration Confirmation',
            f'Your registration is successful. Your password is {password}.',
            'hhari9282@gmail.com',  
            [validated_data['email']],
            fail_silently=False,
        )

        return user
    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'first_name', 'username', 'email', 'phone', 'address', 'country', 'state','district']    