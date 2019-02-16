### Docker Continuous Integration Environment Setup
```
// Can probably skip until--
git clone https://github.com/laravel/laravel.git
sudo chmod -R ugo+rw laravel
cd laravel
cp .env.example .env
sudo chmod -R ugo+rw .env
sed -i '' -e "s/DB_HOST=127.0.0.1/DB_HOST=mysql/g" .env
sed -i '' -e "s/DB_DATABASE=homestead/DB_DATABASE=default/g" .env
sed -i '' -e "s/DB_USERNAME=homestead/DB_USERNAME=default/g" .env
git submodule add https://github.com/Laradock/laradock.git
sudo chmod -R ugo+rw laradock
sudo chmod -R ugo+rw ~/.laradock/data
cd laradock
cp env-example .env
sudo chmod -R ugo+rw .env
sed -i '' -e "s/MYSQL_VERSION=latest/MYSQL_VERSION=5.7/g" .env
sed -i '' -e "s/WORKSPACE_INSTALL_PYTHON=false/WORKSPACE_INSTALL_PYTHON=true/g" .env
//-- here //
docker-compose build workspace
docker-compose build nginx mysql php-fpm phpmyadmin
docker-compose up -d nginx mysql php-fpm phpmyadmin
docker-compose build workspace
docker-compose up -d workspace
docker-compose exec workspace bash -c 'composer install && php artisan key:generate && php artisan migrate && PATH=/home/laradock/.nvm/versions/node/v10.3.0/bin:$PATH && npm install'
```