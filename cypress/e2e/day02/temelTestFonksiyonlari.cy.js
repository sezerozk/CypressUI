describe('Temel test fonksiyonlari', () => {
    it('visit(), get(), click(), type(), should(), fonksiyonlarinin kullanimi', () => {
        
        cy.visit('URL');//Bir URL'yi zitaret etmek icin kullanilir
        cy.get('locator').click();
        //get() Bir ya da daha fazla elementi secmek icin kullanilir
        //click() tiklamak icin kullanilir
        cy.get('locator').type('metin').should('dogrulayici', 'dogrulanacak metin');
        //type() veri girmek icin kullanilir 
        
    });
});