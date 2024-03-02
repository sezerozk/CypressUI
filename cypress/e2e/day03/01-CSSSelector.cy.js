describe('CSS Selector', () => {
    it('CSS Selector ile konum belirleme', () => {

        cy.visit('https://www.kitapyurdu.com/');

        //Tag name
        cy.get('input');

        //ID
        cy.get('#search-input');

        //Class name
        cy.get('.name');

        //Attribute value
        cy.get('[name="search_keyword"]');

        //Class value
        cy.get('[class="top-menu fr"]');

        //tag name and attribute value
        cy.get('input[name="search_keyword"]');

        
    });
});