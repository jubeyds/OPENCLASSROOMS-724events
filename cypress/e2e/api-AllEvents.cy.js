const apiEvents = `${Cypress.env("apiUrl")}/events`;

context("GET /events", () => {
    

     it ("Recupérer toutes les évènnements", () => {
          cy.request("GET", apiEvents).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).length.to.be.greaterThan(1)
     });
 });  

});

