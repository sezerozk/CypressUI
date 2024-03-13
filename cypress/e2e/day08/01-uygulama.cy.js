const { faker } = require("@faker-js/faker");

describe('Uygulama 06', () => {
        
    it('Tool Shop - Gecerli verilerle siteye kayit olunabilmeli', () => {
        let email = faker.internet.email();
        let password = faker.internet.password({ length: 10 });
        cy.writeFile('datas/email.txt',email)
        cy.writeFile('datas/password.txt',password)

        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('[data-test="nav-sign-in"]').click();
        cy.get('[data-test="register-link"]').click();

        cy.get('[data-test="register-form"]').within(() => {

            cy.get('#first_name').type(faker.person.firstName());
            cy.get('#last_name').type(faker.person.lastName());
            cy.get('#dob').type('1992-12-12');
            cy.get('#address').type(faker.location.streetAddress());
            cy.get('#postcode').type(faker.location.zipCode());
            cy.get('#city').type(faker.location.city());
            cy.get('#state').type(faker.location.state());
            //cy.get('#country').select(faker.location.country()); Esasen bu sekilde de 
            //calisabiliyor ama ulke adinin listede yazildigi sekilde yazilmasi gerekitigi 
            //icin hata alinabilir o sebeple indeks kullanarak secim yapmak daha mantikli
            cy.get('#country').select(faker.number.int({ min: 0, max: 248 }));
            cy.get('#phone').type(faker.number.int());
            cy.get('#email').type(email);
            cy.get('#password').type(password);
            cy.get('[data-test="register-submit"]').click();
        });

        cy.get('h3').should('have.text','Login');
    });
});