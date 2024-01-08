php artisan make:migration add_column_to_users_table --table=users

php artisan route:cache
php artisan cache:clear
php artisan config:clear
php artisan view:clear
php artisan optimize:clear

php artisan serve --host=192.168.88.59 --port=8000