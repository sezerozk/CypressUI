describe('iframe', () => {
    it('Iframe eklentisi ile calismak', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.get('p').clear();
    });
});