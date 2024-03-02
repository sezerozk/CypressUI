//Bir elemnent gorunene kadar sayfayi kaydirir
describe('Eylem Methodlari - scrollIntoView()', () => {
    it('scrollIntoView()', () => {

        cy.visit('https://www.webdriveruniversity.com/index.html');

        //Scroll
        //cy.get('#actions').scrollIntoView();//Bu sekilde yazildiginda sayfayi cok hizli kaydiriyor daha yavas kaydirilmesi 
        //isteniyorsa option ozellikleri ile ayarlama yapilabilir

        cy.get('#actions').scrollIntoView({duration:1000});

    });
});