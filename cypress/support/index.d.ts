declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to log in
     * @param username - The username for login
     * @param password - The password for login
     */
    login(username: string, password: string): Chainable<void>;
     /**
     * Custom command to simulate a failed login attempt
     * @param username - The username for login
     * @param password - The password for login
     */
    loginFailure(username: string, password: string): Chainable<void>;
  }
}