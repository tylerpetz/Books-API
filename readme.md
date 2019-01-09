## Books to Read
My app for tracking which books I'd like to read

### Requirements
* PHP
* MySQL
* Apache/Nginx
* Composer
* Node/NPM

### Cloning and Setting Environment Variables

```
# Clone the repository
git clone repo my-books

# Enter the project directory
cd my-books

# Copy the .env file
cp .env.example .env
```

Now edit `.env` with your database connection info

### Setting Up

```
# Install composer dependencies
composer install

# Install front-end depenencies
cd frontend
npm run build
cd ../

# Run the database migrations and seed with data
php artisan migrate:refresh --seed

# Start the server
php artisan serve
```

### Development

Run the compiler and watch front-end files

```
# Navigate to frontend directory
cd frontend

# Run the compiler and watch front-end files
npm run serve

# Run unit tests
npm run test:unit
```

Go to `http://localhost:8080/` for a live reloading front-end

### Deployment

Todo