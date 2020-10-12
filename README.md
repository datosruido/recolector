# recolector

<img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>

La aplicacion `recolector` de Datos Ruido es un proyecto de código abierto que busca disponer de una plataforma para el monitoreo ciudadano de niveles de ruido.

## Instalación

Requisitos:

* Docker versión 19.03.5

* docker-compose versión 1.24.1

Construir imagen:

```sh
docker build -t recolector .
```

Listar imagen:

```sh
docker image ls
```

Ejecutar contenedor a partir de imagen:

```sh
docker run -p 3000:80 -d recolector
```

Listar contenedores:

```sh
docker ps
# filtrado
docker ps -f name=recolector
```

Ingresar al contenedor:

```sh
docker exec -it <contenedor> /bin/bash
```

Comprobar logs:

```sh
docker logs <contenedor>
```

Ejecutar entorno:

```sh
# desarrollo
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
# producción
docker-compose up -d
```

Configurar archivo de variables de entorno:

```sh
cp .env.example .env
# generar key
date +%s | sha256sum | base64 | head -c 32 ; echo
```

## Uso

Registro:

```sh
curl --request POST \
  --url http://localhost/api/v1/register \
  --header 'content-type: application/json' \
  --data '{
	"email": "<correo>"
}'
```

Autenticación:

```sh
curl --request POST \
  --url http://localhost/api/v1/auth \
  --header 'content-type: application/json' \
  --data '{
	"email": "<correo>"
}'
```

Ingreso de datos:

```sh
curl --request POST \
  --url http://localhost/api/v1/gatherer \
  --header 'content-type: application/json' \
  --header 'x-access-token: <token>' \
  --data '{
	"timestamp": <dia hora>,
	"latitude": <latitud>,
	"longitude": <longitud>,
	"dba": <medida>
}'
```

## Contribución

Toda contribución es bienvenida, por favor antes lee la [guía de contribución](/CONTRIBUTING.md).

## Licencia

[MIT Licence](https://choosealicense.com/licenses/mit/)

## Contribuidores

* Datos Ruido [@datosruido](https://github.com/datosruido)

* Alejandro Melo [@alemelomeza](https://github.com/alemelomeza)
