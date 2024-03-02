/*
    1) https://automationteststore.com sitesine git
    2) 'Contact Us' bağlantısına tıkla
    3) Kayıt formunu tamamla
    4) Kaydın gerçekleştiğini doğrula
*/

describe('Method Zinciri', () => {
    it('Method Zinciri Kullanimi', () => {
        //https://automationteststore.com sitesine git
        cy.visit('https://automationteststore.com');

        //'Contact Us' bağlantısına tıkla
        cy.get('.info').contains('Contact Us').click();//CSS seletor'de text ile locate alamiyoruz fakat bu islemi
        //contains() methodunu kullanarak yapabiliyoruz

        //Kayıt formunu tamamla
        cy.get('#ContactUsFrm').within(() => {
            //Sadece formun icerisindeki elemanlarla calismak istedim icin
            //form'u locate ettikten sonra within() methodu ile devam ettim.
            cy.get('#ContactUsFrm_first_name').type('Sezer');
            cy.get('[name="email"]').type('Sezer@gmail.com');
            cy.get('#ContactUsFrm_enquiry').type('Sezer');
            cy.get('div[class="col-md-6 col-sm-6"]').find('button[class="btn btn-primary lock-on-click"]').click();
        });

        cy.get('.mb40').find('p').should('exist').and('be.visible').and('have.text','Your enquiry has been successfully sent to the store owner!');

    });
});