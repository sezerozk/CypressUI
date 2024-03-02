/*
    https://automationteststore.com adresini ziyaret et
    Login ol
    Login Name = techpro
    Password = techpro!
    "Login" butonuna tıkla
    "Welcome back" metni ile login işleminin başarılı olduğunu kontrol et
*/

describe('UYgulama 03', () => {
    it('CSS Selectro Kullanimi', () => {
        //https://automationteststore.com adresini ziyaret et
        cy.visit('https://automationteststore.com');
        cy.url().should('contain', 'https://automationteststore.com')

        cy.contains('Login or register').click();
        //cy.get('#customer_menu_top > li > a').click();
        cy.get('#loginFrm_loginname').type('techpro');
        cy.get('#loginFrm_password').type('techpro!');
        cy.get('button[type="submit"][title="Login"]').click();
        cy.get('a[class="top menu_account"] > div[class="menu_text"]').should('contain', 'Welcome back Gürkay');

    });
});