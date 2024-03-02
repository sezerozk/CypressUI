//Sayfayi ya da sayfada bulunan kaydirmaya musait bir elementi belli bir konuma kadar kaydirir
describe('Eylem Methodlari - scrollTo()', () => {
    it('scrollTo()', () => {

        cy.visit('https://www.webdriveruniversity.com/index.html');

        //Koordinat ile scroll yapma
        cy.scrollTo(0, 2000, { duration: 1000})

        //Position degeri ile scroll yapma
        cy.scrollTo('bottom');
    });
});