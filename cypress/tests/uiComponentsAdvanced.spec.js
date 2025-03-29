import 'cypress-iframe'

describe('UI Components advanced', function(){

    it('Child Windows', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(el)
        {
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url, () => 
            {
                cy.get("div.sub-menu-bar a[href*='about']").click()
            })
        })
    })

    it('iFrame', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/') // Assure-toi d'avoir installé cypress-iframe : npm install -D cypress-iframe
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.wait(3000);
        cy.iframe().find('h1.pricing-title').should('have.length', 2)
    })

    
})