describe('Test API GET /events/last', () => {
    const apiBaseUrl = Cypress.env("apiUrl");
  
    it('Devrait récupérer le dernier événement avec la structure attendue', () => {
      cy.request({
        method: 'GET',
        url: `${apiBaseUrl}/events/last`
      }).then((response) => {
        // Vérifier le statut de la réponse
        expect(response.status).to.eq(200);
  
        const event = response.body;
  
        // Vérifier que la réponse contient toutes les propriétés attendues et leurs types
        
        expect(event).to.have.property('_id').that.is.a('string');
        expect(event).to.have.property('title').that.is.a('string');
        expect(event).to.have.property('date').that.is.a('string');
        expect(event).to.have.property('type').that.is.a('string');
        expect(event).to.have.property('cover').that.is.a('string');
        expect(event).to.have.property('description').that.is.a('string');
        expect(event).to.have.property('nb_guest').that.is.a('number');
        expect(event).to.have.property('periode').that.is.a('string');
        expect(event).to.have.property('prestations').that.is.an('array');
        expect(event).to.have.property('location').that.is.a('string');
  
        
      });
    });
  });
  