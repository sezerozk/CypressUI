//Bu komut input tagi ile birlikte calisabiliyor. Istersek listeden dosya secebildigimiz gibi
//surukle birak yontemini de kullanabiliyoruz. Daha dogrusu sistemin surukle birakla calisip calismadigini
//test edebiliyoruz. 
describe('Eylem Methodlari - selectFile()', () => {
    it('selectFile()', () => {

        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html');
        // cy.get('#myFile').selectFile('package.json');

        //Surukle birak yontemi ile ekleme yapma
        cy.get('#myFile').selectFile('package.json',{action:"drag-drop"});
    });
});
