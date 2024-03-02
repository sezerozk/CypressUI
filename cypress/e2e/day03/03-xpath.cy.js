describe('XPATH', () => {
    it('Xpath ile locate alma', () => {
        cy.visit('https://www.kitapyurdu.com/');

        cy.xpath('//input')

        cy.xpath('//*[@name="search_keyword"]');

        cy.xpath('//a[text()="Giriş Yap"]');
    });
});