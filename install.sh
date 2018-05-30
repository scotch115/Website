#!/bin/bash
git clone https://github.com/laravel/laravel.git
sudo chmod -R ugo+rw laravel
cd laravel
git submodule add https://github.com/Laradock/laradock.git
sudo chmod -R ugo+rw laradock
sudo chmod -R ugo+rw ~/.laradock/data
cd laradock
cp env-example .env
# sed -i "s/WORKSPACE_INSTALL_PYTHON=false/WORKSPACE_INSTALL_PYTHON=true/g" .env
docker-compose build workspace
docker-compose build nginx mysql php-fpm phpmyadmin
docker-compose up -d nginx mysql php-fpm phpmyadmin
docker-compose build workspace
docker-compose up -d workspace
docker-compose exec workspace bash -c 'cp .env.example .env && composer install && php artisan key:generate && PATH=/home/laradock/.nvm/versions/node/v9.11.1/bin:$PATH && npm install && sed -i "s/DB_HOST=127.0.0.1/DB_HOST=mysql/g" .env && sed -i "s/DB_DATABASE=homestead/DB_DATABASE=default/g" .env && sed -i "s/DB_USERNAME=homestead/DB_USERNAME=default/g" .env && php artisan migrate'

