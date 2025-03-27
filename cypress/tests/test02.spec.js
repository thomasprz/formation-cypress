describe('My Second test suite', function(){

    it('My first test case', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") 
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator')
        cy.get('.products .product').filter(':contains("Cashews")').find('button').click();
        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('tbody tr td').should('include.text', 'Cashews');
        cy.contains('Place Order').click()
    })
})