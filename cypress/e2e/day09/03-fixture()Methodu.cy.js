

describe('fixture() methodu', () => {
    it('fixture() methodu', () => {
        cy.visit('https://www.kitapyurdu.com/');
        cy.get('[class="jBox-closeButton jBox-noDrag"]').click();
        cy.get('#cookiescript_accept').click();

        cy.fixture('kitapYurdu').then((data) => {
            cy.get('#search-input').type(`${data.arananKelime}{enter}`);
            cy.get('#product-table').find('.name').each(($urunAdi) => {
                cy.wrap($urunAdi).invoke('text').then((text) => {
                    expect(text.toLowerCase()).to.include(arananKelime);
                })
            });
        })




        
    });
});
