describe('Eylem Methodlari-click() methodu', () => {
    it('click() methodunun kullanimi', () => {

        //elementin merkezine tiklamak
        cy.visit('https://www.letskodeit.com/practice');
        // cy.get('#opentab').click();

        //Elementin farkli konumlarina tiklama

        // cy.visit('https://www.letskodeit.com/practice');
        // cy.get('#opentab').click('topLeft');
        // cy.get('#opentab').click('top');
        // cy.get('#opentab').click('topRigth');
        // cy.get('#opentab').click('left');
        // cy.get('#opentab').click('center');
        // cy.get('#opentab').click('right');
        // cy.get('#opentab').click('bottomLeft');
        // cy.get('#opentab').click('bottom');
        // cy.get('#opentab').click('bottomRight');


        //Koordinat belirterek tiklama
        // cy.get('#openwindow').click(-20, -20); Kod bu haliyle iken tiklamak istedigimiz alan locate'in disinda oldugu icin 
        //test fail oluyor. Bunun boyle olmasinin sebebi force option'unun default olarak false olarak ayarlanmasidir. Yani 
        //bu option ile tiklama isleminin locate icerisinde kalmasini saglaniyor. Koordinat sisteminde 0,0 noktasi locate'in
        //sol ust kosesi oldugu icin -20,20 piksel degerleri locatin disinda daha sol ve daha ust bir noktayi belirtiyor.
        //Test'in fail olmamasi icin bu ozelligi true olarak degistirmeliyiz. Option'lar {} icerisinde yaziliyor.

        // cy.get('#openwindow').click(-40, 40, { force: true });

        //Birden fazla elemente tiklama
        cy.get('[name="cars"][type="checkbox"]').click({ multiple: true });

        //scrollBehavior ozelligi default olarak "top" ayarlanmis fakat "center", "bottom", "nearest" ya da "false" olarak
        //degistirebiliyoruz. Fakat "false" olarak degistirdigimizde kaydirma islemi devre disi kalmis olur.
        //cy.get('[id="mousehover"]').click({scrollBehavior:'center'});
        cy.get('[id="mousehover"]').click({ scrollBehavior: 'nearest' });


    });
});