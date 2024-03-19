describe('Cypress Studuio', () => {
    it('Cypress Studio Kullanimi', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('[data-test="nav-categories"]').click();
        cy.get('[data-test="nav-hand-tools"]').click();
        cy.get('[data-test="product-01HSC1BK5YARHG04PJ582RWH8A"] > .card-img-wrapper > .card-img-top').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="cart-quantity"]').click();
        cy.get('[data-test="proceed-1"]').click();
        /* ==== End Cypress Studio ==== */
    });
});