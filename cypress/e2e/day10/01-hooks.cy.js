describe('Hook nedir', () => {

    //before() hook
    before('Bu bir before hook blogudur', () => {
        cy.log('Tum testlerden once calisir ve bir kez calisir')
    });

    after(() => {
        cy.log('Tum testlerden sonra calisir ve bir kez calisir')
    });

    beforeEach(() => {
        cy.log('Her testten once bir kere calisir')
    });

    afterEach(() => {
        cy.log('Her testten sonra bir kez calisir')
    });


    it('Test01', () => {

        cy.log('Test 1')
    });

    it('Test02', () => {

        cy.log('Test 2')
    });

    it('Test03', () => {

        cy.log('Test 3')
    });
});