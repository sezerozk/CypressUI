const { wrap } = require("cypress/types/lodash");

describe('Listelerle calismak', () => {
    it('Kitap Yurdu - Arama listesindeki urun basliklarini dogrulama', () => {
        cy.visit('https://www.kitapyurdu.com/');

        cy.get('#search-input').type('java{enter}');

        cy.get('#product-table').find('.name').each(($urunAdi) => {
            wrap($urunAdi).invoke('text').then((text) => {
                expect(text.toLowerCase()).to.include('java');
            })
        });
    });
});