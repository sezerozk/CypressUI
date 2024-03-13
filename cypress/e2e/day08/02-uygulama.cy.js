describe('Uygulama 07', () => {
    it('Tool Shop gecerli verilerle siteye giris yapilabilmeli', () => {

        cy.visit('https://practicesoftwaretesting.com/#/');

        cy.get('[data-test="nav-sign-in"]').click();

        cy.readFile('datas/email.txt').then((email)=>{

            cy.get('#email').type(email);
        })

        cy.readFile('datas/password.txt').then((password)=>{
            cy.get('#password').type(password);
        })
        cy.get('[data-test="login-submit"]').click();
        
        
    });
});