describe('Yeni sekmede calisma', () => {
    it('target attribute unu kaldirarak yeni sekmede calisma', () => {

        cy.visit('https://www.letskodeit.com/practice');

        cy.get('#opentab').invoke('removeAttr', 'target').click();
        //Eger elementte target degeri yoksa alttaki ikinci yontemle sonuca ulasmaya calisiriz.
        cy.get('#search').type('typeScript');


    });


    it('Yeni sekmede acilan sayfayi visit() ile ziyaret etmek', () => {

        cy.visit('https://www.letskodeit.com/practice');
        //Burada ziyaret edilen sitenin baseUrl'inin degismemesi gerektigi unutlmamali.
        cy.visit('https://www.letskodeit.com/courses');
        // cy.get('#opentab').invoke('removeAttr','target').click();
        cy.get('#search').type('typeScript');


    });
});