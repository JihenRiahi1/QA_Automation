/// <reference types="cypress"/>


describe('SafetyioTest', () => {
    it('open and check wheather page', () => {
      cy.visit (Cypress.env('WeatherPageURL'))
      cy.title().should('eq',Cypress.env('WeatherPgeTitle'))
      cy.wait(5400)     //sometimes the menu buttons is nt cliecked due to a slow network
      cy.get(Cypress.env('MenuButton')).should('be.visible').click()
      cy.get(Cypress.env('GoToPolicy')).should('be.visible').click()
      cy.title().should('contain',Cypress.env('PolicyPageTitle'))
      cy.contains(Cypress.env('Polocy14Title')).click()
  
      cy.get(Cypress.env('Polocy14Text')).invoke('text').then((policy14) => 
        {          
          cy.readFile('cypress\\Resours\\Policy14_txt.txt').then((expected_Policy14) => {
            expect(policy14.trim).to.equal(policy14.trim)
          })
        })
        
  })
  })