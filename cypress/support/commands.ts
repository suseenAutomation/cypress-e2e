import { login, loginFailure } from './login';
// This file contains custom Cypress commands for login functionality
// Import the login function from the login module
Cypress.Commands.add('login', (username: string, password: string) => {
  login(username, password);
});

Cypress.Commands.add('loginFailure', (username: string, password: string) => {
  loginFailure(username, password);
});