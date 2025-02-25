import { faker } from '@faker-js/faker';

const apiBaseUrl = Cypress.env("apiUrl");

describe('Test API POST /contact', () => {
  it('Devrait créer un contact et retourner 201 Created', () => {
    // Générer des données aléatoires pour le contact
    const contactPayload = {
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      email: faker.internet.email(),
      message: faker.lorem.paragraph(),
      // Ajout du champ contactType requis. 
      // La valeur doit être conforme aux exigences de l'API (exemple: "client", "prospect", "partenaire", etc.)
      contactType: "client"
    };

    // Envoyer la requête POST vers l'endpoint /contact
    cy.request({
      method: 'POST',
      url: `${apiBaseUrl}/contact`,
      body: contactPayload,
      failOnStatusCode: false // Si vous souhaitez gérer manuellement le code d'erreur dans le test
    }).then((response) => {
      // Vérifier que le status code est 201 (Created)
      expect(response.status).to.eq(201);
      // Vous pouvez ajouter d'autres assertions sur le corps de la réponse, par exemple :
      // expect(response.body).to.have.property('id');
    });
  });
});
