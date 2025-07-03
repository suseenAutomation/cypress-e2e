// import { login, loginFailure} from '../support/login';

describe('Login tests',() => {
  beforeEach(() =>{
    cy.visit('/login');
  });

  it('should log in successfully with valid credentials', () => {
    cy.fixture('usercredentials').then((users) => {
      cy.login(users.validUser.username, users.validUser.password);
    })
  });

  it('verify login with bad credentials', () => {
    cy.fixture('usercredentials').then((users)=> {
      cy.loginFailure(users.invalidUser.username, users.invalidUser.password);
    })
  });

});

// describe('Login Tests', () => {
  

 

//   it('should fail to log in with invalid credentials', () => {
//     cy.fixture('users').then((users) => {
//       cy.login(users.invalidUser.username, users.invalidUser.password); // Use custom command
//       cy.get('.error-message').should('be.visible'); // Verify error message
//     });
//   });
// });