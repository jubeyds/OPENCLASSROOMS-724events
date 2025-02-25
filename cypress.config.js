const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    apiUrl: "http://localhost:8080/api"
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,  // Ne pas écraser les rapports précédents
    html: true,       // On désactive la génération automatique d'un rapport HTML ici (nous allons le générer manuellement)
    json: true,        // Génère un fichier JSON pour chaque spec
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // Ajoutez ici vos écouteurs d'événements si nécessaire
    },
  },
});
