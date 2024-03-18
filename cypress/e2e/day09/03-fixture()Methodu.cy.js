const { faker } = require("@faker-js/faker");

describe('fixture() methodu', () => {
    it('fixture() methodu', () => {
        cy.visit('https://www.kitapyurdu.com/');
        cy.get('[class="jBox-closeButton jBox-noDrag"]').click();
        cy.get('#cookiescript_accept').click();

        cy.fixture('kitapYurdu').then((data) => {
            // let kelime = data.arananKelime;
            cy.get('#search-input').type(`${data.kelime}{enter}`);
            cy.get('#product-table').find('.name').each(($urunAdi) => {
                cy.wrap($urunAdi).invoke('text').then((text) => {
                    expect(text.toLowerCase()).to.include(data.kelime);
                })
            });
        })
    });

    it('Tool Shop - Gecerli verilerle siteye kayit olunabilmeli', () => {
        
        
        let jsonData = {
            "email": faker.internet.email(),
            "password": faker.internet.password({ length: 10 })
        }

        cy.writeFile('cypress/fixtures/toolShop.json',jsonData)

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
            cy.get('#email').type(jsonData.email);
            cy.get('#password').type(jsonData.password);
            cy.get('[data-test="register-submit"]').click();
        });

        cy.get('h3').should('have.text','Login');
    });

    it('Tool Shop - fixture() methodu ile login olma', () => {

        cy.visit('https://practicesoftwaretesting.com/#/');

        cy.get('[data-test="nav-sign-in"]').click();

        cy.fixture('toolShop').then((data)=>{
            cy.get('#email').type(data.email);
            cy.get('#password').type(data.password);
        });

        cy.get('[data-test="login-submit"]').click();

    });

});
