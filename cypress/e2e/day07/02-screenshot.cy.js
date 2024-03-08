describe('Screenhot', () => {
    it('Screenshot', () => {

        cy.visit('https://www.webdriveruniversity.com/index.html');
        cy.screenshot()//Bu sekilde sayfanin tamaminin ekran goruntusunu aliyor.
        cy.get('#login-portal').invoke('removeAttr', 'target').click();

        cy.get('.form').screenshot().find('#text').click().type('Screenshot').screenshot();
    });
});