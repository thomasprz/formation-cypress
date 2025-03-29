describe('End to end Ecommerce', function(){

    it('Submit Order', function () {
        //Arrange
        const productName = "Nokia Edge"
        //Act
            //LOGIN
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")
        cy.get('#username').type("rahulshettyacademy")
        cy.get('#password').type("learning")
        cy.contains("Sign In").click()
        cy.contains("Shop Name").should('be.visible')
        cy.get('app-card').should('have.length', 4)
            //ADD-TO-CART
        cy.get('app-card').filter(`:contains(${productName})`).then($element => {
            cy.wrap($element).should('have.length', 1)
            cy.wrap($element).contains('button','Add').click()
        })
        cy.get('app-card').eq(0).contains('button','Add').click()
        cy.contains('a','Checkout').click()
            //CART
        let sum = 0
        cy.get('tbody tr td:nth-child(4) strong').each($e1=> {
            const amount = Number($e1.text().split(" ")[1].trim())
            sum = sum + amount
        }).then(() => {
            expect(sum).to.be.lessThan(200000)
        }) 
        cy.contains('button','Checkout').click()
        cy.get('#country').type('India')
        cy.get(".suggestions ul li a", { timeout: 10000 }).click()
        cy.get(".btn-success").click()
        cy.get(".alert-success").should('contain','Success')
    })
})
