describe('UI Components', function(){

    it('Checkbox', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check()
        cy.get('#checkBoxOption1').should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck()
        cy.get('#checkBoxOption1').should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3']) //value="option2"
    })

    it('Static Dropdown', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select').select('option2')
        cy.get('select').should('have.value','option2')
    })

    it('Dynamic Dropdown autocomplete', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {  
            if ($el.text() === "India") {  
                $el.click() 
            }
        })
        cy.get('#autocomplete').should('have.value','India')
    })

    it('Dynamic Dropdown autocomplete alternative', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').contains('India').click()
    })

    it('Hide/Show element', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

    it('Radio Button', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[value="radio2"]').check()
        cy.get('[value="radio2"]').should('be.checked')
    })
})