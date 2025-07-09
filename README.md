# PropertyVista – Full Stack Real Estate Platform

PropertyVista is a full-featured real estate web application built using Django for the backend and React.js for the frontend. It allows users to browse, list, and manage properties with a responsive and interactive UI.

---

## Key Features

- **Property Listings**: Display detailed property data including images, pricing, and descriptions.
- **Advanced Filters**: Search by location, price, number of bedrooms, and more.
- **Google Maps Integration**: Visualize property locations via Google Maps API.
- **User Authentication**: JWT-based secure login and registration.
- **User Ratings & Reviews**: Users can rate and review properties.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

---

## Tech Stack

### Backend
- Django (Python)
- Django REST Framework
- SQLite3 (or PostgreSQL)

### Frontend
- React.js
- CSS Modules / Styled Components

### Tools & Services
- JWT Authentication
- Google Maps API
- Docker (Optional)
- Git (Version Control)

---

## Getting Started Locally

### 1. Clone the Repository
```bash
git clone https://github.com/YourUsername/PropertyVista.git




cd PropertyVista/backend
python -m venv venv

# Activate virtual environment
# Windows
venv\Scripts\activate
# Mac/Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver



Environment Variables
Backend (.env)
SECRET_KEY: Your Django secret key

DEBUG: False

ALLOWED_HOSTS: Your Render domain or *

DATABASE_URL: PostgreSQL URL (if using PostgreSQL)

CORS_ALLOWED_ORIGINS: e.g., https://propertyvista.onrender.com

Frontend (.env)
REACT_APP_API_URL: e.g., https://propertyvista-api.onrender.com

Deployment on Render
Django Backend
Go to https://render.com

Create a new Web Service

Connect your GitHub and select the backend folder

Set the following:

Build Command:


pip install -r requirements.txt && python manage.py migrate
Start Command:


gunicorn your_project_name.wsgi
Replace your_project_name with your Django project name

Add environment variables

Click Deploy

React Frontend
Create a new Static Site

Connect your GitHub frontend folder (typically /frontend)

Set:

Build Command:


npm install && npm run build
Publish Directory:


build
Add environment variable:

REACT_APP_API_URL = https://<your-django-api>.onrender.com

In Progress
Admin Dashboard for managing users and listings

Owner Dashboard with analytics

Advanced filtering with additional criteria

Contributing
We welcome contributions:


# Fork the repository
git checkout -b feature/YourFeature
git commit -m "Added YourFeature"
git push origin feature/YourFeature
# Open a Pull Request
