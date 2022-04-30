describe('My First Test', function () {
    it('Visit Swipe-Select', function () {
       cy.visit('https://62699493b8d5132941a50b35--joyful-torte-bbed12.netlify.app/') 

       cy.get('button').click()

       cy.contains('75').scrollIntoView()

       cy.contains('75').click()

       cy.get('button').click()

       cy.contains('40').scrollIntoView()

       cy.contains('40').click()

       cy.get('button').click()

       cy.contains('60').scrollIntoView()

       cy.contains('434').scrollIntoView()

       cy.contains('36').scrollIntoView()

       cy.contains('36').click()
  
    })
})