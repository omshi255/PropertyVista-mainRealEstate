from django.db import models

class Property(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=255)  
    image = models.ImageField(upload_to='properties/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


#slider property


class SliderProperty(models.Model):
    title = models.CharField(max_length=255)
    image_url = models.URLField()
    description = models.TextField(blank=True, null=True)
    link = models.URLField(blank=True, null=True)
    location = models.CharField(max_length=255)  
    rating = models.FloatField(default=0.0)  # Rating field

    def __str__(self):
        return self.title


#contact agents
from django.db import models

class PropertyAgent(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    property_location = models.CharField(max_length=100)
    property_description = models.TextField()
    property_image = models.ImageField(upload_to='agents_images/', blank=True)

    def __str__(self):
        return f"{self.name} - {self.property_location}"
#notifications
from django.db import models

class ExploreProperties(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50, choices=[
        ('Apartment', 'Apartment'),
        ('Villa', 'Villa'),
        ('Studio', 'Studio'),
    ])
    location = models.CharField(max_length=200)
    owner_name = models.CharField(max_length=100)
    owner_contact = models.CharField(max_length=15)
    image = models.ImageField(upload_to='explore_properties_images/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
#rental property
from django.db import models

class RentalProperty(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=255)
    image = models.ImageField(upload_to='property_images/')
    category = models.CharField(max_length=100)
    owner_name = models.CharField(max_length=100)
    owner_contact = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    #project galery

# models.py
from django.db import models

class PropertyInterior(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='property_interior_images/')

    def __str__(self):
        return self.title

# models.py
from django.db import models
from django.contrib.auth.models import User
from .models import PropertyInterior

class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    property = models.ForeignKey(PropertyInterior, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['user', 'property']

    def __str__(self):
        return f'{self.user.username} - {self.property.title}'


#user reviews
from django.db import models

class Review(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    review_text = models.TextField()
    rating = models.PositiveSmallIntegerField(default=5)  # Rating from 1-5
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.rating} Stars"
