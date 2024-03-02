describe('Eylem Methodlari - type() - clear()', () => {
    it('type() - clear()', () => {

        cy.visit('https://www.letskodeit.com/practice');

        //Normal sekilde metin ekleme
        //cy.get('#enabled-example-input').type('QA Ingenieur');

        //Option ile kullanma
        cy.get('#disabled-button').click();//Disable butonuna tiklayarak ilgili alani yazi yazilamaz hale getriyoruz
        //daha sonra force option'unu true haline getirip yazmaya zorluyoruz ve yazi yazabiliyoruz
        cy.get('#enabled-example-input').type('QA Ingenieur{backspace}', { force: true });
        //'QA Ingenieur{backspace}' burada sequence kullaniminin bir ornegini goruyoruz yazidan sonra {backspace} diyerek
        //son karakteri silmis oluyoruz. 
        //clera()
        cy.wait(3000);
        cy.get('#enabled-example-input').clear({force:true})//Yukarida disable butonuna tikladigimiz icin clear() fonksiyonunu
        //calistirabilmek icin terkar force option'unun degeri true yaptik

        //cy.get('#enabled-example-input').type('QA Ingenieur{selectAll}{backspace}', { delay: 1000 });//Yazdiklarimizin tamamini 
        //siliyoruz ve islemleri gorebilmek icin delay ile 1 saniye bekleterek yaziyor ve siliyoruz.

    });
});