/// <reference types="cypress" />

export const login = (username: string, password: string) => {
  cy.visit('/login'); // Navigate to the login page
  cy.fixture('mappings/login').then((mappings) => {
    cy.get(mappings.username).type(username); // Enter username
    cy.get(mappings.password).type(password); // Enter password
    cy.get(mappings.loginButton).click(); // Click the login button
    cy.get(mappings.logoutButton).should('contain', 'Log out'); // Verify login success
  });
};

export const loginFailure = (username: string, password: string) => {
  cy.visit('/login'); // Navigate to the login page
  cy.fixture('mappings/login').then((mappings) => {
    cy.get(mappings.username).type(username); // Enter username
    cy.get(mappings.password).type(password); // Enter password
    cy.get(mappings.loginButton).click(); // Click the login button
    cy.get(mappings.loginError).should('be.visible'); // Verify error message is displayed
    cy.get(mappings.loginError).should('contain','Invalid username or password!'); // Check for specific error messag
  });
};