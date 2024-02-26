describe('Test Aşamaları', () => {
    it('Temel Komutlar', () => {
        cy.visit('https://www.kitapyurdu.com')//GIven-->Test icin on hazirlik
        cy.contains('Üye Ol').click()//When-->Eylem
        cy.url().should('contain', 'account/register')//Then-->Testi dogrulama
    });
});