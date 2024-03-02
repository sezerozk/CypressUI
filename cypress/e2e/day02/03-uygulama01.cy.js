/*
    1- https://www.kitapyurdu.com sitesine git
    2- 'Üye Ol' bağlantısına tıkla
    3- Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula
*/

describe("Uygulama-01", () => {

    it("Temel fonksiyonlarin kullanimi", () => {

        //https://www.kitapyurdu.com
        cy.visit("https://www.kitapyurdu.com/");

        //'Üye Ol' bağlantısına tıkla
        cy.get('.register > a').click();

        //Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula
        cy.get('#register-name').type('Sezer').should('have.value','Sezer');
    });


});