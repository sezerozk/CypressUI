describe('Mouseover islemi', () => {
    it('invoke() methoduyla mouseover', () => {
        cy.visit('https://www.letskodeit.com/practice');
        cy.get('[class="mouse-hover-content"]').invoke('show');
        cy.get('[class="mouse-hover-content"]').scrollIntoView();
        cy.wait(2000)
        //Esasen burada yaptigimiz mouseover isleminden ziyade gorunmez olan menuyu 
        //"show" diyerek gorunur olmaya zorlamak oluyor. Menu ile islem yaptigimiz icin de 
        //menuyu belirten bir locate aldik.
        //Bir de trigger () ile calisirken verdigimiz locate i otomatik olarak sayfanin ustune kaydiriyordu
        //fakat invoke () ta oyle bir sey olmadigi icin scrollIntoView() ile biz kaydiriyoruz
        cy.get('[href="#top"]').click();
    });
});