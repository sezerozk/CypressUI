describe('Navigasyon', () => {
    it('Browser da geri ileri  ve yenile butonlarinin kullanimi', () => {

        cy.visit('https://www.webdriveruniversity.com/index.html');
        cy.get('#contact-us').invoke('removeAttr', 'target').click();

        cy.url().should('include', 'https://www.webdriveruniversity.com/Contact-Us/contactus.html');

        cy.go('back')
        cy.url().should('include', 'https://www.webdriveruniversity.com/index.html')

        cy.reload();
        cy.wait(2000);
        cy.reload(true);//reload'in bu sekilde kullanilmasi cash bellek'te bulunan datalar kullanilmaksizin
        //sanki siteye ilk defa giriliyormus gibi yenileme islemi yapilmasini sagliyor

        

    });
});