describe('Eylem Methodlari dblclick', () => {
    it('dblclick', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        //Yukaridaki kodlar olmadigi zaman bu siteye ozgu olarak hata aliyoruz.

        cy.visit('https://demoqa.com/buttons');
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click').and('be.visible').and('exist');
        
        //click() methoduyla birlikte kullandigimiz ozellikleri dblclikck() methoduyla birlikte de kullanabiliriz

    });
});