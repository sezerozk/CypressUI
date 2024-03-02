describe('Eylem Methodlari - trigger()Methodu', () => {
    it('trigger()Methodu', () => {
        //trigger() methodu bir cok farkli sey(surukle-birak islemi gibi) icin kullanilabiliyor
        //fakat biz esasen fare ile bir elementin uzerine gelindigi zaman acilan menuler icin kullanacagiz.
        //Bu menuler js ya da css ile yazilmis olabiliyor. Eger menu css ile yazilmis ise trigger ile menuyu
        //acamayabiliriz. 
        cy.visit('https://www.letskodeit.com/practice');
        cy.get('#mousehover').trigger('mouseover');//elementin uzeine fareyi goturmus oluyoruz fakat menu css
        //ile olusturuldugu icin menuyu acamiyoruz.
        //Manu acikmasa dahi menudeki seceneklerden birisine tiklamayi deneyelim=>
        // cy.get('[href="#top"]').click(); kodumuz boyle iken get metgodu aradigimiz elementi buluyor fakat
        //menu acik olmadigi icin tiklayamiyoruz. Bunu asmak icin option kullanabiliriz


        cy.get('[href="#top"]').click({ force: true });//Bu sekilde tiklayabildik

    });

    it('trigger()Methodu - Amazon sitesi', () => {
        cy.visit('https://www.amazon.fr/');
        cy.get('#sp-cc-accept').click();
        cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover');
    });


});