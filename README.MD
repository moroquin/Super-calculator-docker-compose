# Super Calculadora 
# Utilizando multiples contianers con docker

## Descripción

Este proyecto es parte de las clases del curso de laboratorio de Manejo e Implementacińo de Archivos. Tiene como objetivo demostrar el uso de los contenedores en una aplicación distribuida. 

### Contenedores
Los contenedores que se utilizan en el proyecto son los siguientes: 
* **ApiRest** es la API que responde a la funcionalidad de la aplicación. Escucha las peticiones para realizar calculos así como login y registro de usuarios. 
* **Worker** es el encargado de realizar los calculos matemáticos, ya que la API únicamente orquesta toda la funcionalidad. 
* **Site** su única responsabilidad es funcionar como servidor para las páginas del sitio. 
* **NGINX** funcionando como reverse proxy, redirige las peticiones para la solicitud de la app web, y también para las solicitudes de la API. 

### Requisitos
Para hacer funcionar el proyecto necesita
* Tener instalado docker
* Tener instalado docker-compose

### Comandos
* **Inicio de los contendores:** 
```bash
docker-compose up -d --build
```
* **Terminar los contendores:** 
```bash
docker-compose down
```
### Acceso a la aplicación
La aplicación expone el puerto 80, para acceder al html basta con: 
```http
http://localhost
```
### Acceso a la API
Para poder acceder a la api es necesario utilizar /api : 
```http
http://localhost/api/
```