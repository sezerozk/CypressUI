describe('Cypress Session', () => {
    beforeEach(() => {

        let username = "Admin"
        let password = "admin123"

        cy.session([username, password], () => { //Birden fazla parametreyi tek parametre gibi girebilmek icin array kullandik
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            cy.get('[name="username"]').type(username)
            cy.get('[name="password"]').type(password)
            cy.get('[type="submit"]').click()
        })

        cy.visit('https://opensource-demo.orangehrmlive.com/');
        //Burada session methodu her ne kadar beforeEach() icerisinde olsa da her bir it blogu ucun tekrar tekrar 
        //calismayacak sadece bir kere calisacak. Devamina siteyi ziyaret edebilmek icin cy.visit() ekledik cunku
        //session icerisine koydugumuz visit sadece session() icerisinde belirttigimiz islemler icin kullanilmis olacak.
        //Cypress console'u inceledigimizde session nasil islev gordugu daha net olarak anlasiliyor. Burada bir kere login
        //olma islemi session() icerisinde gerceklesti ve aslinda 3 kere login olmak gerekli iken kalan iki testte login
        //asamasi otomatik gecildi ve geriye kalan kodlar calistirilarak testler yapildi. Bence gayet kullanisli ve 
        //mantikli. 

    });
    it('Sitede Admin paneline girme testi', () => {
        cy.contains('Admin').click()
        cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'Admin')
    });
    it('Sitede PIM paneline girme testi', () => {
        cy.contains('PIM').click()
        cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'PIM')
    });
    it('Sitede Recruitment paneline girme testi', () => {
        cy.contains('Recruitment').click()
        cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'Recruitment')
    });
});