## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)

## Installation

1. Install dependencies for the frontend.
   ```sh
   cd frontend
   npm install
   ```
2. Install dependencies for the backend.
   ```sh
   cd mysite
   pipenv shell
   pipenv install
   ```
3. Create a `.env` file in the `backend` directory with the following variables:
   ```
   DEBUG=True
   SECRET_KEY=your-secret-key
   ```
4. Run migrations to create the database tables.
   ```sh
   python manage.py makemigrations
   python manage.py migrate
   ```
5. Create a superuser to access the admin interface.
   ```sh
   python manage.py createsuperuser
   ```

## Usage

1. Start the backend server.
   ```sh
   cd mysite
   python manage.py runserver
   ```
2. Start the frontend server.
   ```sh
   cd frontend
   npm start
   ```
3. Access the application at `http://localhost:3000/`.

4. Access the backend admin interface at `http://localhost:8000/admin/
`

## Technologies

- React
- Django
- HTML
- CSS
- JavaScript
