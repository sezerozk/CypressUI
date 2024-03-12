const { faker } = require("@faker-js/faker");

let fakeFirstName = faker.person.firstName();
let fakeLastName = faker.person.lastName();
let fakeEmail = faker.internet.email();
let fakePassword = faker.internet.password();

describe('faker-js kullanimi', () => {
    it('faker-js ile ornek test', () => {
        cy.visit('https://www.kitapyurdu.com/index.php?route=account/register');
        cy.wait(10000)
        cy.get('#cookiescript_accept').click();

        cy.get('#register-name').type(fakeFirstName);
        cy.get('#register-lastname').type(fakeLastName);
        cy.get('#register-email').type(fakeEmail);
        cy.get('#register-password').type(fakePassword);
        cy.get('#register-password-confirm').type(fakePassword);

        cy.get('[for="agree"] [class="ky-checkbox-input"]').click({ force: true });


        cy.get('[type="submit"]').click();

    });

    it.only('E posta validation mesajinin dogrulanmasi', () => {

        cy.visit('https://www.automationexercise.com/login');
        cy.get('[data-qa="login-email"]').type(fakeFirstName);
        cy.get('[data-qa="login-password"]').type(fakeFirstName);
        cy.get('[data-qa="login-button"]').click();
        //Burada input'un type'i email olarak olusturuldugi icin hatali email girildiginde js tarafindan
        //otomatik olarak bir hata mesaji gosteriliyor. Bu mesaji developper olusturmadigi icin locatini direkt
        //alamiyoruz. Bu mesaji dogrulayabilkmek icin invoke() methodundan faydalaniyoruz. Bunun icin mesajin 
        //gorundugu yer olan email kutusunun locatini almak gerek.

        cy.get('[data-qa="login-email"]')
            .invoke('prop', 'validationMessage')//js'te cikan mesajin ismi validationMessage oldugu icin ismi parametre 
            //olarak kullandik 
            .should('contains', 'Veuillez inclure "@"');


    });
});