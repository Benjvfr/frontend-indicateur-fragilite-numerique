FROM httpd:2.4

COPY ./dist/indicateur-numerique-frontend /usr/local/apache2/htdocs/

EXPOSE 80