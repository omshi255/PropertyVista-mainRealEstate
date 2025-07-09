# PropertyVista – Full Stack Real Estate Platform

**PropertyVista** is a modern and scalable real estate web application designed for browsing, listing, and managing properties. It features a fully responsive user interface, robust backend APIs, and secure user management.

---

## 🔹 Key Features

### Property Listings  
View detailed property information including images, pricing, location, property type, and descriptions.

### Advanced Search Filters  
Easily filter properties by location, price range, number of bedrooms, and custom criteria.

### Google Maps Integration  
Visualize exact property locations through dynamic map embedding using the Google Maps API.

### User Reviews & Ratings  
Users can submit property reviews and ratings to provide insight for other users.

### Authentication System  
Secure user login and registration using JWT authentication for both property seekers and owners.

### Responsive Design  
Optimized for seamless user experiences across desktops, tablets, and mobile devices.

---

## 🔹 Tech Stack

### Backend  
- Django (Python)  
- Django REST Framework  
- SQLite3 (configurable to PostgreSQL)

### Frontend  
- React.js  
- CSS Modules / Styled Components

### Utilities & Integrations  
- JWT for user authentication  
- Google Maps API  
- Git for version control  
- Docker (Optional, for containerization and deployment)

---

## 🔹 Local Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/YourUsername/PropertyVista.git

2. Backend Setup (Django)
bash
Copy
Edit
cd PropertyVista/backend
python -m venv venv                 # Create virtual environment

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser   # Create admin user
python manage.py runserver
Visit: http://127.0.0.1:8000/

3. Frontend Setup (React)
bash
Copy
Edit
cd PropertyVista/frontend
npm install
npm start
Visit: http://localhost:3000/

🔹 Environment Variables
Backend (.env or environment setup):

SECRET_KEY: Your Django secret key

DEBUG: False (for production)

ALLOWED_HOSTS: Render domain or * for local development

DATABASE_URL: (If using PostgreSQL on Render)

CORS_ALLOWED_ORIGINS: Frontend domain (e.g., https://propertyvista.onrender.com)

Frontend (.env):

REACT_APP_API_URL: Backend API URL (e.g., https://propertyvista-api.onrender.com)

🔹 Render Deployment Guide
Backend Deployment (Django on Render)
Go to https://render.com and create an account.

Create a new Web Service.

Connect your GitHub and select the backend directory.

Add the following build and start commands:

Build Command:

bash
Copy
Edit
pip install -r requirements.txt && python manage.py migrate
Start Command:

bash
Copy
Edit
gunicorn your_project_name.wsgi
(Replace your_project_name with your Django project folder name)

Add environment variables (SECRET_KEY, DATABASE_URL, etc.)

Select region and deploy.

Frontend Deployment (React on Render)
Create a new Static Site.

Connect your frontend directory (typically /frontend).

Build command:

bash
Copy
Edit
npm install && npm run build
Publish directory:

bash
Copy
Edit
build
Add environment variable:

REACT_APP_API_URL = https://<your-django-api>.onrender.com

🔹 In Progress Features
Admin Dashboard for superusers to manage listings and users.

Property Owner Dashboard with analytics and management tools.

Extended filters for advanced user searches.

🔹 Contributing
We welcome open-source contributions!

Fork the repository.

Create a new branch:

bash
Copy
Edit
git checkout -b feature/YourFeature
Commit your changes:

bash
Copy
Edit
git commit -m "Added YourFeature"
Push to your branch:

bash
Copy
Edit
git push origin feature/YourFeature
