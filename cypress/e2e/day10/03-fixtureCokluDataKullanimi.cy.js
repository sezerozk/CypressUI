describe('fixture() - Coklu data kullanimi', () => {

    let dataSeti;

    before(() => {
        cy.fixture('kitapYurdu2').then((data) => {
            dataSeti = data;
        })
    });

    beforeEach(() => {
        cy.visit('https://www.kitapyurdu.com/');
    });

    it('Kitap Yurdu - Arama kelimelerinin testi', () => {
        cy.wait(3000)
        cy.get('#cookiescript_accept').click();
        cy.get('.jBox-closeButton').click();
        dataSeti.forEach((data) => {
            cy.get('#search-input').type(`${data.kelime}{enter}`)
            cy.get('.search-heading-title').should('contain', data.kelime);
            cy.get('#search-input').clear();
        });

    });
});