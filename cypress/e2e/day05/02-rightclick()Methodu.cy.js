describe('Eylem Methodlari rightclick', () => {
    it('rightclick', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        //Yukaridaki kodlar olmadigi zaman bu siteye ozgu olarak hata aliyoruz.

        cy.visit('https://demoqa.com/buttons');
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click').and('be.visible').and('exist');
        
        //click() methoduyla birlikte kullandigimiz ozellikleri rightclikck() methoduyla birlikte de kullanabiliriz

    });
});