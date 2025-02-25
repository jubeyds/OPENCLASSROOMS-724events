describe('Filtrage par catégorie dans la section Nos Réalisations', () => {

    beforeEach(() => {
      // Accéder directement à la section "Nos Réalisations"
      cy.visit('/#nos-realisations');
      // Ouvrir le menu déroulant "Categories"
      cy.xpath('//*[@id="nos-realisations"]/div[1]/div/button').click();
    });
  
    it('Filtre et affiche les événements pour la catégorie "Toutes"', () => {
      cy.xpath('//*[@id="nos-realisations"]/div[1]/div/ul/li[2]').click();
      // Vérifier que des éléments sont affichés
      cy.get('.EventCard__label').should('have.length.greaterThan', 0);
    });
  
    it('Filtre et affiche les événements pour la catégorie "conférence"', () => {
      cy.xpath('//*[@id="nos-realisations"]/div[1]/div/ul/li[3]').click();
      cy.get('.EventCard__label').each(($el) => {
        cy.wrap($el).should('contain.text', 'conférence');
      });
    });
  
    it('Filtre et affiche les événements pour la catégorie "expérience digitale"', () => {
      cy.xpath('//*[@id="nos-realisations"]/div[1]/div/ul/li[4]').click();
      cy.get('.EventCard__label').each(($el) => {
        cy.wrap($el).should('contain.text', 'expérience digitale');
      });
    });
  
    it('Filtre et affiche les événements pour la catégorie "soirée entreprise"', () => {
      cy.xpath('//*[@id="nos-realisations"]/div[1]/div/ul/li[5]').click();
      cy.get('.EventCard__label').each(($el) => {
        cy.wrap($el).should('contain.text', 'soirée entreprise');
      });
    });
  
    it('Filtre et affiche les événements pour la catégorie "world forum"', () => {
      cy.xpath('//*[@id="nos-realisations"]/div[1]/div/ul/li[6]').click();
      cy.get('.EventCard__label').each(($el) => {
        cy.wrap ($el).should('contain.text', 'world forum');
      });
    }); 
  });
  
  
  











