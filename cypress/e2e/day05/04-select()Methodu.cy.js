describe('Eylem methodlari - select() Method ', () => {
    it('select()Method Kullanimi', () => {

        cy.visit('https://www.letskodeit.com/practice');

        //Metin ile secim yapma
        cy.get('#carselect').select('Benz');
        cy.wait(1000);
        //Value ile secim yapma
        cy.get('#carselect').select('honda');

        cy.wait(1000);
        //Index ile secim yapma
        cy.get('#carselect').select(0);

        //Secili olani bulma
        cy.get('#carselect option:selected').should('have.text', 'BMW')

        //Metin ile coklu secim yapma
        cy.get('#multiple-select-example').select(['Apple', 'Orange']);

        //Value ile coklu secim yapma
        cy.get('#multiple-select-example').select(['peach', 'orange']);

    });
});