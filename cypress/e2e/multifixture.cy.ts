// <reference types="cypress" />

let hello = "Hello, Cypress!";

const availableFixtures = [
  {
    name: "onefixture",
    context: "1",
  },
  {
    name: "twofixture",
    context: "2",
  },
];

describe.skip("Automation Test Suite - Fixtures",  () => {
  availableFixtures.forEach((afixture) => {
    describe(`Fixture Context: ${afixture.context}`, () => {
    interface FixtureData {
      Username: string;
      Email: string;
      Password: string;
      NewPassword: string;
    }

    interface AvailableFixture {
      name: string;
      context: string;
    }

    let testData: FixtureData;

      before(function () {
        cy.fixture(afixture.name).then( (data) => {
          testData = data;
        });
      });

      it("should test registration using fixture data",  () =>  {
        cy.visit("https://shop.demoqa.com/my-account/");
        cy.get("#reg_username").type(testData.Username);
        cy.get("#reg_email").type(testData.Email);
        cy.get("#reg_password").type(testData.Password);

        // Check if the Register button is disabled
        cy.get(".woocommerce-Button")
          .should("have.attr", "disabled", "disabled")
          .and("be.disabled");

        // Enter new password to enable the button and register
        cy.get("#reg_password").clear().type(testData.NewPassword);
        cy.get(".woocommerce-Button").click();

        // Validate if the username is populated after registration
        cy.get("#username").should("have.value", testData.Username);
      });
    });
  });
});
