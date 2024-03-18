describe('Custom Command', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })
    it('Magento - Gecerli verilerle login olma testi', () => {
     cy.magentoLogin('aedyn.kewon@fixedfor.com','*9kJceG5*TSWXhb');
    });

    it('Magento - Gecersiz kullanici adi ile login olma testi', () => {
        cy.magentoLogin('aedyn.kewn@fixedfor.com','*9kJceG5*TSWXhb');
    });

    it('Magento - Gecerli sifre ile login olma testi', () => {
        cy.magentoLogin('aedyn.kewon@fixedfor.com','*9kJceG5TSWXhb');
    });

    it('Magento - Gecerli sifre ve kullanici adi ile login olma testi', () => {
        cy.magentoLogin('aedyn.kewn@fixedfor.com','*9kJceG*TSWXhb');
    });

});