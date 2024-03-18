describe('Hooks Uygulama', () => {
    let username;
    let password;
    before(() => {
        cy.fixture('orangehrm') .then((data)=>{
            username = data.username;
            password = data.password;
        })  ; 
    });

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('[name="username"]').type(username);
        cy.get('[name="password"]').type(password);
        cy.get('[type="submit"]').click();
    });

    it('Sitede Admin alanina girme testi', () => {
     
        cy.get('[href="/web/index.php/admin/viewAdminModule"]').click();
        cy.get('[class="oxd-topbar-header-breadcrumb"]').should('contain', 'Admin');
    });

    it('Sitede PIM alanina girme', () => {
        
        cy.get('[href="/web/index.php/pim/viewPimModule"]').click();
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('contain', 'PIM');
    });

    it('Sitede PIM alanina girme', () => {
       
        cy.get('[href="/web/index.php/recruitment/viewRecruitmentModule"]').click();
        cy.get('[class="oxd-topbar-header-breadcrumb"]').should('contain', 'Recruitment');
    });


});