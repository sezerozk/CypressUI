describe('Alert', () => {
    it('Alert mesajni dogrulamak', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('[onclick="jsAlert()"]').click();

        cy.on('window:alert', (mesaj) => {
            expect(mesaj).to.eq('I am a JS Alert')
            //alert icerisindeki mesaji "mesaj" degiskenine atadik ve alertte bulunan
            //mesajla ayni olup olmadigini assert ettik.
        })
    });

    it('Alert te iptal butonuna basmak', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('[onclick="jsConfirm()"]').click();//Cypress acilan pencerede default olarak "ok" butonuna tikliyor
        cy.on('window:confirm', () => {
            //confirm turunde bir alert mesaji oldugu icin "window:confirm" dedik 
            return false//false dedigimizde "annuler" true dedigimizde "ok" butonlarina tikliyor
        });
    });

    it('Alert prompt alanina metin girmak', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.window().then(((alertPenceresi) => {
            cy.stub(alertPenceresi, 'prompt').returns('Cypress')//prompt alanina "Cypress" yazmis olduk
            cy.get('[onclick="jsPrompt()"]').click();
        }))


    });
});