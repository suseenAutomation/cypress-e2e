// This file is used to set up global configurations and behaviors for Cypress tests.
// Import custom commands
import './commands';
import 'cypress-grep';

// You can add global configurations or behaviors here if needed.

Cypress.on('uncaught:exception', (err) => {
  // Ignore errors from adplus.js or other third-party scripts
  if (err.message.includes('c(...).setup is not a function')) {
    return false; // Prevent Cypress from failing the test
  }
  // Allow other exceptions to fail the test
});

// Cypress.on('uncaught:exception', (err, runnable) => {
//   if (err.message.includes('Script error') || err.message.includes('cross origin')) {
//     return false;
//   }
// });

