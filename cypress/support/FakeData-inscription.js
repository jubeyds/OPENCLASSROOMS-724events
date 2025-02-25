import { faker } from '@faker-js/faker';

// Fonction pour générer un utilisateur avec un nom, prénom et un email aléatoires
export function generateRandomUser() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    message : faker.lorem.sentence()
  };
}
