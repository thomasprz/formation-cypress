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
                cy.wrap($el).click({ force: true })  // Force le clic sur l'élément
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

    it('Pop up alert without confirmation', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str) => {
            expect(str).to.be.equal('Hello , share this practice page and share your knowledge') //Mocha
        })
    })

    it('Pop up with confirmation alert', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[value="Confirm"]').click()
        cy.on('window:confirm',(str) => {
            expect(str).to.be.equal('Hello , Are you sure you want to confirm?')
        })
    })

    it('Open Tab vers un autre site internet/domaine', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click() //Cypress ne peut pas tester une nouvelle tab , il faut donc supprimer la nouvelle tab et la positionner dans la page actuelle.
        cy.origin("https://www.qaclickacademy.com/", () => 
        {
            cy.get("#navbarSupportedContent a[href*='about']").click()
            cy.get(".mt-50 h2").should('contain','QAClick Academy')
        })
    })

    //it('Open Tab vers le même site internet domaine', function () {
    //    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //    cy.get('#opentab').invoke('removeAttr', 'target').click()
    //    cy.url().should('include', 'rahulshettyacademy.com')
    //    cy.get("#navbarSupportedContent a[href*='about']").click()
    //    cy.get(".mt-50 h2").should('contain', 'QAClick Academy')
    //})

    it('Tableau', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tbody tr td:nth-child(2)').each(($el, index, $list) => {
            const text=$el.text()
            if(text.includes("Python"))
            {
                cy.get("tbody tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                 const priceText=price.text()
                 expect(priceText).to.equal('25')
                })
            }
        })
    })

    it('Mouse Over', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
    })
})