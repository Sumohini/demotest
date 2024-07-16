/// <reference types="Cypress" /> 

describe('login', () => {
    //beforeEach(() => {
        it('demo case',() => {
        //cy.visit('https://demoqa.com/automation-practice-form') 
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit('https://demoqa.com/forms')
        cy.contains('Practice Form').click()
        cy.get('#firstName').type('sumo')

        

    })
})
