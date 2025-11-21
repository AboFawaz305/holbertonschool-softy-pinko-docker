FROM nginx:latest
WORKDIR /var/www/html/softy-pinko-front-end/
COPY assets/ assets
COPY index.html .
WORKDIR /etc/nginx/conf.d/
COPY softy-pinko-front-end.conf ./default.conf
