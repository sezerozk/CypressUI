describe('Amazon', () => {
    it('Iphone Arama Testi', () => {

        cy.visit('https://www.amazon.fr/');
        cy.get('#sp-cc-accept').click();
        cy.get('#twotabsearchtextbox').type('Iphone');
        cy.get('#nav-search-submit-button').click();
        cy.get('.a-color-state').should('contain','Iphone');
    });
});