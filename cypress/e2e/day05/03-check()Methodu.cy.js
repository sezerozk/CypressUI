describe('Eylem methodlari - check methodu', () => {
    it('check()Methodu kullanimi', () => {
        cy.visit('https://www.letskodeit.com/practice');

        //CHECKBOXES
        //Tumunu secmek icin; 
        //locate alirken secilmek istenen tum checkbox lari ifade edebilen bir locate alinmalidir
        cy.get('[name="cars"][type="checkbox"]').check().should('be.checked');
        //Alidigimiz locate de 3 tane checkbox oldugu icin check() methodu ucunu de isaretledi ve 
        //sonrasinda isaretlenmis olup olmadigini should ile assert ettik.

        //Isaretlemeleri kaldirmak icin uncheck() methodu kullanilabilir
        cy.get('[name="cars"][type="checkbox"]').uncheck().should('not.be.checked');

        //ilk kutucugu secmek icin
        cy.get('[name="cars"][type="checkbox"]').first().check().should('be.checked');

        //value ile isaretleme
        cy.get('[name="cars"][type="checkbox"]').check('benz').should('be.checked');

        //value ile isareti kaldirma
        cy.get('[name="cars"][type="checkbox"]').uncheck('benz').should('not.be.checked');

        //birden fazla secim yapma
        cy.get('[name="cars"][type="checkbox"]').check(['benz', 'honda']).should('be.checked');


        //RADIO BUTTONS
        //Secim yapma
        cy.get('[name="cars"][type="radio"]').check();
        //check() methodunu kullandigimiz icin aldigimiz locate de bulunan her uc radio button una da 
        //tikladi fakat radio butonlarinin ozelligi geregi en son tiklanan buton isaretlenmis oldu.

    });
});