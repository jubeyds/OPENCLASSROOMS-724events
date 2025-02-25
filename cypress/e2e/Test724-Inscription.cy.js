import { generateRandomUser } from '../support/FakeData-inscription.js';

describe('Test sur les formulaires d\'Inscription', () => {
  it('Remplit et soumet le formulaire d\'inscription "Sneakercraze market" avec des données aléatoires', () => {
    
    const user = generateRandomUser();

    
    cy.visit('/event/679a023cbc77e16c189a57dd'); 

    cy.xpath('//*[@id="root"]/div/div[2]/form/div/div/div[1]/input').type(user.firstName);

    cy.xpath('//*[@id="root"]/div/div[2]/form/div/div/div[2]/input').type(user.lastName);

    cy.xpath('//*[@id="root"]/div/div[2]/form/div/div/div[3]/input').type(user.email);
    
    cy.xpath('//*[@id="root"]/div/div[2]/form/div/div/input').click();
    
    cy.contains('Merci pour votre inscription !').should('be.visible');
  });

  it('Remplit et soumet le formulaire d\'inscription "conférence" avec des données aléatoires', () => {
    
    const user = generateRandomUser();

    
    cy.visit('/event/67a476488dfff2e785d9b94e'); 

    cy.xpath('//*[@id="root"]/div/div[2]/form/div/div/div[1]/input').type(user.firstName);

    cy.xpath('//*[@id="root"]/div/div[2]/form/div/div/div[2]/input').type(user.lastName);

    cy.xpath('//*[@id="root"]/div/div[2]/form/div/div/div[3]/input').type(user.email);
    
    cy.xpath('//*[@id="root"]/div/div[2]/form/div/div/input').click();
    
    cy.contains('Merci pour votre inscription !').should('be.visible');
  });

  it('Remplit et soumet le formulaire d\'inscription Sneakercraze market avec des données aléatoires', () => {
    
    const user = generateRandomUser();

    
    cy.visit('/event/679a023cbc77e16c189a57dd'); 

    cy.xpath('//*[@id="root"]/div/div[2]/form/div/div/div[1]/input').type(user.firstName);

    cy.xpath('//*[@id="root"]/div/div[2]/form/div/div/div[2]/input').type(user.lastName);

    cy.xpath('//*[@id="root"]/div/div[2]/form/div/div/div[3]/input').type(user.email);
    
    cy.xpath('//*[@id="root"]/div/div[2]/form/div/div/input').click();
    
    cy.contains('Merci pour votre inscription !').should('be.visible');
  });


});


