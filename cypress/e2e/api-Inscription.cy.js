import { faker } from '@faker-js/faker';

const apiBaseUrl = Cypress.env("apiUrl");
const events = {
  sneakercrazeMarket: "67a679d2f59631889c848a7e",
  conference: "67a679d2f59631889c848a7d",
  worldEconomicForum: "67a679d2f59631889c848a7c",
};

// Fonction pour générer un utilisateur avec des données aléatoires (surname en chaîne)
export function generateRandomUser() {
  return {
    firstName: faker.person.firstName(),
    surname: faker.person.lastName(), // En tant que chaîne, conformément à la logique utilisateur 
    email: faker.internet.email(),
  };
}

function inscrireAUnEvenement(eventId) {
  const user = generateRandomUser();

  // Récupération des informations de l'événement
  cy.request("GET", `${apiBaseUrl}/events/${eventId}`).then((eventResponse) => {
    // Vérifier que l'événement est correctement récupéré
    expect(eventResponse.status).to.eq(200);
    expect(eventResponse.body).to.have.property('title');

    const eventDate = eventResponse.body.date; // On récupère la date de l'événement

    // Constitution du corps de la requête d'inscription
    const requestBody = {
      eventId: eventId,
      name: user.firstName,
      surname: user.surname,
      email: user.email,
      date: eventDate,
    };

    // Envoi de la requête POST pour l'inscription
    cy.request("POST", `${apiBaseUrl}/inscription/`, requestBody)
      .then((response) => {
        // Vérifier que le statut est 201 Created
        expect(response.status).to.eq(201);
        // Vérifier que la réponse contient les bonnes informations
        expect(response.body).to.have.property('eventId', eventId);
        expect(response.body).to.have.property('email', user.email);
      });
  });
}

context("POST /inscription", () => {
  it("Inscription à Sneakercraze Market", () => {
    inscrireAUnEvenement(events.sneakercrazeMarket);
  });

  it("Inscription à World Economic Forum", () => {
    inscrireAUnEvenement(events.worldEconomicForum);
  });

  it("Inscription à Conférence", () => {
    inscrireAUnEvenement(events.conference);
  });
});


    //event "sneakercraze market" : 67a679d2f59631889c848a7e
    //event "conférence" : "67a679d2f59631889c848a7d
    //event "World economic forum" : 67a679d2f59631889c848a7c
// integration de "failOnStatusCode" pour faire passer les tests en cas de statut 404 et surame : number???