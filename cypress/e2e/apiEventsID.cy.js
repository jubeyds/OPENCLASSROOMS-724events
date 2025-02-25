let eventsId;
const apiEvents = `${Cypress.env("apiUrl")}/events`;
it("Récupérer toutes les events et extraire un ID", () => {
  cy.request("GET", apiEvents).then((response) => {
    eventsId = response.body[Math.floor(Math.random() * response.body.length)].id;
  });
});


it("Récupérer les détails d'une catégorie par ID", () => {
  // Vérifiez que l'ID de catégorie a été extrait avec succès
  cy.request(apiEvents + `/${eventsId}`)
    .its("status")
    .should("eq", 200);
});