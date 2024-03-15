

describe('Listelerle calismak', () => {
    it('Kitap Yurdu - Arama listesindeki urun basliklarini dogrulama', () => {
        let arananKelime = 'java'

        cy.visit('https://www.kitapyurdu.com/');

        cy.get('[class="jBox-closeButton jBox-noDrag"]').click();
        cy.get('#cookiescript_accept').click();
        cy.get('#search-input').type(`${java}{enter}`);//type methodunun icerisine ekledigimiz {enter} ile enter tusuna basmis olduk

        cy.get('#product-table').find('.name').each(($urunAdi) => {
            cy.wrap($urunAdi).invoke('text').then((text) => {
                expect(text.toLowerCase()).to.include(arananKelime);
            })
            //Burada get ile bir liste dondurecek sekilde web elementlerin secimini yaptik. Daha sonra each methodu
            //ile bu listedeki elementlerin herbirini $urunAdi degiskenine atadik. Bir web elementi bir degiskene 
            //atadigimiz zaman cy.get('selector') ile bulup sonrasinda method zincirleriyle cypress komutlarini 
            //kullandigimiz gibi kullanamiyoruz. Bunun yerien degiskeni wrap() icerine alarak kullaniyoruz. Invoke()
            //methodu ile aldigimiz web elementi text'e donusturuyoruz.
        });
    });
});
