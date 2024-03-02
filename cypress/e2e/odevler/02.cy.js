
// Formdaki dolu olan alanları temizle

describe('Odev02', () => {
    it('Eylem komutlarinin kullanimi', () => {
        // https://automationteststore.com adresini ziyaret et
        cy.visit('https://automationteststore.com');

        // Login ol
        // Login Name = techpro
        // Password = techpro!
        cy.get('#customer_menu_top > li').click();
        cy.get('#loginFrm_loginname').type('techpro');
        cy.get('#loginFrm_password').type('techpro!');

        // "Login" butonuna tıkla
        cy.get('button[type="submit"][title="Login"]').click();

        // Edit account details butonuna tıkla
        cy.get('a[data-toggle="tooltip"][data-original-title="Edit account details"]').click();

        cy.get('div[class="registerbox form-horizontal"]').within(() => {
            cy.get('#AccountFrm_firstname').clear().type('UI Testing');
            cy.get('#AccountFrm_lastname').clear().type('Continue');
            cy.get('#AccountFrm_email').clear().type('apprendre@testing.com');
            cy.get('#AccountFrm_telephone').clear().type('852123996');
            cy.get('#AccountFrm_fax').clear().type('852123996');
        });

        cy.get('button[title="Continue"]').click();

        cy.get('div[class="alert alert-success"]').should('be.visible');
        cy.get('div[class="alert alert-success"]').should('have.text','\n×\nSuccess: Your account has been successfully updated.')
    });
});