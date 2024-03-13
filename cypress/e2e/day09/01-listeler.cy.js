describe('Listelerle Calismak', () => {
    it('each() ve wrap() methodlari', () => {
        cy.visit('https://www.kitapyurdu.com/');
        //cy.get('.bestseller-cr .name') bu sekilde yazildiginda alttaki satirla ayni islemi yerine getirebiliyoruz
        cy.get('.bestseller-cr').find('.name').each(($kitapIsmi, index) => {
            cy.log(index + "- " + $kitapIsmi.text())//Burada text() methodunu kullanmazsak elementin icerdigi metni degil
            //elementin adini yazdirmis oluruz. (span.name) gibi
        });
    });

    it('Tool Shop, each() ve wrap() methodlarinin kullanimi', () => {
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('.col-md-9').find('.card-title').each(($urun, index) => {
            cy.log(index + 1 + "- " + $urun.text())
            cy.wrap($urun)//each'in icerisinde cypress'in methodlarini kullanabilmek icin wrap'e ihtiyacimiz var
                .invoke('text')//Elementin text ozelligini alir
                .should('exist').and('have.length.gte',3);//Text en az 3 karakter iceriyor mu kontrolu yapar
        });
    });
});