describe('iframe', () => {
    it('Iframe eklentisi ile calismak', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.frameLoaded('#mce_0_ifr')//frameLoaded() methodu ile sayfadaki iframe alanini tanimliyoruz.
        //Artik cy.iframe() methodunu kullandigimiz zaman tanimladigimiz bu alanda islem yapilacak.

        //cy.iframe().find('p').clear().type('iframe i ogrendim'); Burada hata aldik ve hatanin cozumu
        //icin olusturdugumuz method zincirini kirmamizi onerdi cypress ve asagidaki gibi zinciri
        //kirip yazdigimizda kad calisti.

        cy.iframe().find('p').clear();//Burada dikkat edilmesi gereken konu p elementinin locatini almak
        //icin cy.get() methodunu kullanamadik. Cunku get methodu cy. denmeden calismiyor ve bu sebeple 
        //find() methodunu kullanarak aradigimiz elementin locatini almis olduk.
        cy.iframe().find('p').type('iframe i ogrendim');

    });
});