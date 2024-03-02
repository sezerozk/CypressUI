// https://automationteststore.com adresini ziyaret et
// Login ol
// Login Name = techpro
// Password = techpro!
// "Welcome back …" menüsündeki “Manage Address Book” seçeneğine tıkla
// Edit butonuna tıkla
// Formdaki tüm bilgileri değiştir ve kaydet
// Değişikliklerin uygulandığını doğrula

describe('Uygulama 05', () => {
    it('Eylem methodlari uygulamasi', () => {

        cy.visit('https://automationteststore.com');
        cy.contains('Login or register').click();

        cy.get('#loginFrm_loginname').type('techpro');
        cy.get('#loginFrm_password').type('techpro!');
        cy.get('button[title="Login"]').click();

        cy.get('[class="block_2"]').trigger('mouseover');
        cy.get('[class="sub_menu dropdown-menu"] [href="https://automationteststore.com/index.php?rt=account/address"]').click();
        //Parent'tan child'a dogru gittgimiz icin araya bir karakter bosluk biraktik

        cy.get('button[title="Edit"]').click();

        cy.get('#AddressFrm_firstname').type('{selectAll}{backspace}Sezer');//Burada daha once yazili olanlari silmek icin 
        //clear() da kullanilabilir fakat denemek icin type() ile hem yazdim hem sildim

        cy.get('#AddressFrm_lastname').clear().type('Sezer');
        cy.get('#AddressFrm_company').clear().type('AinTesteurAsso');

        cy.get('#AddressFrm_country_id').select('France');
        cy.get('#AddressFrm_zone_id').select('Auvergne');
        cy.get('#AddressFrm_default0').check();

        cy.get('[title="Continue"]').click();

        cy.get('[class="alert alert-success"]').should('contain', 'Your address has been successfully updated');



    });
});