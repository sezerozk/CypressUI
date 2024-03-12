describe('Shadow root ile calisma', () => {
    it('shadow() ve find() methodlarini kullanrak shadow ile calisma', () => {
        //Site uncaught exception hatasi firlattigi icin oncellikle onu handle ediyoruz.
        cy.on('uncaught:exception', (err, runnable) => { return false });
        cy.visit('https://www.mercedes-benz.co.uk/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE');

        cy.get('[settings-id="fph8XBqir"]')//Ilk olarak shadow root'un icerisinde bulundugu elementin locatini aliyoruz
            .shadow()//Daha sonra bu method ile buranin shadow oldugunu belirtiyoruz
            .find('[data-test="handle-accept-all-button"]')//Shadow icerisinde bulunan elementi locate almaya calisiyoruz
            .contains('Agree to all')//Fakat yukaridaki element unique olmadigi icin contains ile unique yapmaya calisiyoruz
            .click();

    });
});