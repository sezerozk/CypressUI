describe('Screenhot', () => {
    it('Screenshot', () => {

        cy.visit('https://www.webdriveruniversity.com/index.html');
        cy.screenshot()
        cy.get('#login-portal').invoke('removeAttr', 'target').click();

        cy.get('.form').screenshot().find('#text').click().type('Screenshot').screenshot();
    });
});