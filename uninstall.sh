#!/bin/bash
# stop Laradock
cd laravel/laradock
docker-compose down
# remove project
cd ../../
rm -rf laravel
# remove images
docker rmi $(docker images -q)  
# remove containers
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)    
# remove volumes
docker volume rm $(docker volume ls -q)
# remove docker database
rm -r ~/.laradock/data
cd ~/.laradock
mkdir data

