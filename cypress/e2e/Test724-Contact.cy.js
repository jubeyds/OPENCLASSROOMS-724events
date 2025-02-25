import { generateRandomUser } from '../support/FakeData-inscription.js';

describe('Test Formulaire de Contact', () => {
  it('Remplit et soumet le formulaire de contact avec des données aléatoires', () => {
    
    const user = generateRandomUser();

    cy.visit('/#contact');
    
    cy.xpath('//*[@id="contact"]/form/div/div[1]/div[1]/input').type(user.firstName);
    cy.xpath('//*[@id="contact"]/form/div/div[1]/div[2]/input').type(user.lastName);

    // 1. Ouvrir le menu déroulant en cliquant sur le bouton
    cy.xpath('//*[@id="contact"]/form/div/div[1]/div[3]/div[2]/button').click();

    // 2. Attendre que la liste déroulante soit visible
    cy.xpath('//*[@id="contact"]/form/div/div[1]/div[3]/div[2]/ul').should('be.visible');

    // 3. Sélectionner une option dans la liste déroulante
    // Par exemple, sélectionner l'option "Personnel"
    cy.xpath('//*[@id="contact"]/form/div/div[1]/div[3]/div[2]/ul/li[2]')
  .should('contain', 'Personnel') // Vérifier que l'élément contient le texte "Personnel"
  .click(); // Cliquer sur l'élément

    cy.xpath('//*[@id="contact"]/form/div/div[1]/div[4]/input').type(user.email);

    cy.xpath('//*[@id="contact"]/form/div/div[2]/div').type(user.message);

    cy.xpath('//*[@id="contact"]/form/div/div[1]/input').click();
    
    cy.contains('"Merci de nous avoir contacté ! !').should('be.visible');

  });

});


