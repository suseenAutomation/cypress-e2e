describe('Books Page Tests', () => {
    beforeEach(() => {
        cy.log('Visiting Books page');
        cy.visit('https://demoqa.com/books', { timeout: 10000 });
    });

    it('should display the book catalog', () => {
        cy.get('.books-wrapper').should('exist');
        cy.get('#searchBox').should('exist');
        cy.get('.-pagination').should('exist');
        
    });
});