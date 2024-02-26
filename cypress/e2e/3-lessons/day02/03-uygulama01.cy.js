/*
    1- https://www.kitapyurdu.com sitesine git
    2- 'Üye Ol' bağlantısına tıkla
    3- Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula
*/

describe('odev01', () => {
    it('odev01', () => {
        //https://www.webdriveruniversity.com/Contact-Us/contactus.html adresini ziyaret et
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');

        //İletişim Formunu doldur
        cy.get('input[name="first_name"]').type('Sezer');
        cy.get('input[name="last_name"]').type('Sezer');
        cy.get('input[name="email"]').type('Sezer@gmail.com');
        cy.get('textarea[name="message"]').type('Sezer');

        //"SUBMIT" butonuna tıkla
        cy.get('[class="contact_button"][type="submit"]').click();

        //Teşekkür mesajının "Thank You for your Message!" metni olduğunu kontrol et
        cy.get('h1').should('contain', 'Thank');
        //cy.get('h1').should('include','Thank');
        //cy.get('h1').should('have.text','Thank');

    });
}); 