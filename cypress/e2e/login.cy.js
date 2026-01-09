import HomePage from '../pages/pageObjects/HomePage';

describe.only('LoginPage POM Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('userData').as('user');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('@user').then((user) => {
        HomePage.login(user.challengeUser)
    });
    HomePage.clickLogin();
    HomePage.getProfileName().should('contain', 'Hi, challenge'); // verify successful login
  });
});