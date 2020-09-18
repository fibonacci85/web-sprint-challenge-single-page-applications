
describe('testing our form', function(){ 
    beforeEach(function(){
        cy.visit('http://localhost:3004/Pizza');  
    });
    it('add test to inputs and submits', function(){
       cy.get('#name')
        .type('Joey Emeterio')
        .should('have.value', "Joey Emeterio")

        cy.get('#size')
        .select('large')
        .should('have.value', "large")

        cy.get('#peperoni')
        .check()
        .should('be.checked')

        cy.get('#cheese')
        .check()
        .should('be.checked')

        cy.get('#peppers')
        .check()
        .should('be.checked')

        cy.get('#pineapple')
        .check()
        .should('be.checked')

        cy.get('#special')
        .type('deliver ASAP')
        .should('have.value', "deliver ASAP")

        cy.get('.submit').click();
       
    });
});
