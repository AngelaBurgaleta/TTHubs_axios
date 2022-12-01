# TTHubs

TTHubs es un poyecto de la UE para trazabilidad de alimentos. En este módulo nos centramos en la información nutricional de los alimentos. Permite crea, leer, borrar, editar, filtrar y mostar las características nutriconales.


## Instalación

Tras realizar el git clone se instalan las dependencias.

`$ npm install 

Para visualizarlo en modo desarrollo

`$ npm install 

Las credenciales de acceso son:
username: dev@upm.es
password: ut23d8qxu4kyckpv


## A continuación se muestra la arquitectura de los componentes.
![Copia de TTHubs_serverless-Página-1](https://user-images.githubusercontent.com/94869452/205166855-459a74dc-6420-482e-b3b3-249700986649.jpg)


## Firebase hosting

npm install -g firebase-tools
firebase login
firebase init
Opcion only hosting 
public dir? build
? Configure as a single-page app (rewrite all URLs to /index.html)? No
? Set up automatic builds and deploys with GitHub? No

npm run build
firebase deploy

desplegado en: https://tt-hubs.web.app

###Para usar un alias: 

aserc
{
  "projects": {
    "tt-hubs": "upm-lifestech",
    "default": "upm-lifestech"
  },
  "targets": {
    "upm-lifestech": {
      "hosting": {
        "tt-hubs": [
          "upm-lifestech"
        ]
      }
    }
  },
  "etags": {}
}

json
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  },
  "rewrites": [
    {
      "source": "**",
      "destination": "/index.html"
    }
  ],
  "emulators": {
    "hosting": {
      "port": 5033
    },
    "ui": {
      "enabled": true
    }
  },
  "functions": {
    "source": "functions"
  }
}


pasos:

firebase use --add
firebase use tt-hhubs
npm run build
firebase init
firebase deploy -P tt-hubs

https://firebase.blog/posts/2016/07/deploy-to-multiple-environments-with
https://firebase.google.com/docs/hosting/multisites#define_hosting_config

