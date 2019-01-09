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
git clone git@github.com:tylerpetz/Books-API.git my-books

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
npm install && npm run build

# Run the database migrations and seed with data
cd ../
php artisan migrate:refresh --seed

# Start the server
php artisan serve
```

Go to `http://localhost:8000/` to see the current project

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

Go to `http://localhost:8080/` for a live reloading front-end (note the port change)

### Todo

#### General
1. Document deployment process
2. Add Unit Tests

#### UI/UX
1. Explore more clever controls than the select dropdown/switch for sortBy/sortDirection