describe('My first test suite', function(){

    it('My first test case', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") 
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        //parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('.products .product').filter(':contains("Cashews")').find('button').click();
        //This is to print in logs
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
        })
        //Assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
    })
})