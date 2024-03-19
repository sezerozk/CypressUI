describe('Cypress Session', () => {
    beforeEach(() => {
        let username = "Admin"
        let password = "admin123"
        cy.orengehrmSessionLogin(username,password)
        //Bir onceki ornekten farkli olarak burada session() methodu commands.js uzerinden 
        //kullanildi
        cy.visit('https://opensource-demo.orangehrmlive.com/');
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