/*
    1) https://www.webdriveruniversity.com/Contact-Us/contactus.html adresini ziyaret et
    2) İletişim Formunu doldur
    3) "SUBMIT" butonuna tıkla
    4) Teşekkür mesajının "Thank You for your Message!" metni olduğunu kontrol et
*/

describe('odev01', () => {
    it('odev01', () => {
        //https://www.webdriveruniversity.com/Contact-Us/contactus.html adresini ziyaret et
        const url = "https://www.webdriveruniversity.com/Contact-Us/contactus.html";
        cy.visit(url);
        cy.url().should('eq',url);

        //İletişim Formunu doldur
        cy.get('input[name="first_name"]').type('Sezer');
        cy.get('input[name="last_name"]').type('Sezer');
        cy.get('input[name="email"]').type('Sezer@gmail.com');
        cy.get('textarea[name="message"]').type('Sezer');

        //"SUBMIT" butonuna tıkla
        cy.get('[class="contact_button"][type="submit"]').click();

        //Teşekkür mesajının "Thank You for your Message!" metni olduğunu kontrol et
        cy.get('h1').should('contain', 'Thank');
        cy.title().should('contain','Designer')//Gianni Bruno - Designer
        //cy.get('h1').should('include','Thank');
        //cy.get('h1').should('have.text','Thank'); have.text esitlige bakacagi icin tam metin vermek gerek

    });
});