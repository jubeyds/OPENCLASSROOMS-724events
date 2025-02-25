724events

724events est site un site d'une agence dédié à l'événementiel. Ce projet vise à tester le site avant la mise en production.
Ce projet a pour objectif d'automatiser les tests fonctionnels critiques du site afin de garantir la qualité du produit à chaque déploiement. Les tests couvrent notamment :

- Le **formulaire de Contact** (soumission et affichage du message de succès)
- Le **formulaire d’Inscription** (inscription utilisateur et affichage du message de confirmation)
- Le **filtrage par catégorie** dans la section "Nos réalisations"
- La validation des endpoints API critiques (ex. PUT /inscription, GET /events/last)




Pré-requis
 [Node.js](https://nodejs.org/) (version 14 ou supérieure recommandée)
- npm (installé avec Node.js)
- - [Docker Desktop](https://www.docker.com/products/docker-desktop) (pour simuler l'environnement du site)


## Installation

1. **Clonez le repository :**

   
   git clone https://github.com/jubeyds/OPENCLASSROOMS-724events.git

Installez les dépendances :

npm install

Docker Setup
Pour simuler l'environnement du site et de l'API, nous utilisons Docker Desktop.

Construire l'image Docker

Assurez-vous d'être à la racine du projet, puis exécutez :

docker build -t 724events .
Démarrer le conteneur Docker

Lancez le conteneur avec :

docker run -d -p 3000:3000 -p 8080:8080 --name 724events-container 724events

Le site sera accessible sur http://localhost:3000
L'API sera accessible sur http://localhost:8080/api


Arrêter et Supprimer le Conteneur

Pour arrêter le conteneur :

docker stop 724events-container

Pour le supprimer :

docker rm 724events-container



Le fichier de configuration de Cypress se trouve à la racine du projet dans cypress.config.js. 

Par exemple :

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    apiUrl: "http://localhost:8080/api"
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // Ajoutez ici des listeners ou configurations spécifiques si nécessaire
    },
  },
});

Exécution des Tests
En Mode GUI (Interface Graphique)
Pour ouvrir l'interface de Cypress :

npx cypress open


En Mode Headless

Pour exécuter tous les tests en mode headless (sans interface graphique) :

npx cypress run


Générer des rapport HTML dans Cypress :

npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

En JavaScript :

const { defineConfig } = require ( 'cypress' ) 

module .exports = defineConfig ({ reporter : 'mochawesome' , reporterOptions : { reportDir : 'cypress/results' , overwrite : false , html : true , json : true , }   , })
  
  Ligne de commande :
  
cypress run --reporter mochawesome \ 
  --reporter-options reportDir= "cypress/results" ,overwrite= false ,html= false ,json= true
  
 combiner à l'aide de l' utilitaire mochawesome-merge : 

npx mochawesome - fusionner "cypress/results/*.json" > mochawesome.json

générer un rapport HTML : 

npx marge mochawesome.json



Contact
Pour toute question ou suggestion, veuillez contacter :

Nom : De Sousa Jean-Baptiste
Email : desousabatista59@gmail.com
