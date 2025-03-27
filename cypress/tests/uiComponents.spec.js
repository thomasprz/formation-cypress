describe('UI Components', function(){

    it('Checkbox', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check()
        cy.get('#checkBoxOption1').should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck()
        cy.get('#checkBoxOption1').should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['option2','option3']) //value="option2"
    })
})