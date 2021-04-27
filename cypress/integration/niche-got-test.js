describe('Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.intercept('https://game-of-thrones-quotes.herokuapp.com/v1/characters', { fixture:'character_obj.json' })
      .visit.skip('http://localhost:3000/')
  });
  
  it.skip('should display a header, footer, and an image on load', () => {
    cy.get('header').should('be.visible')
    cy.get('footer').should('be.visible')
    cy.get('img[class=home-img]').should('be.visible')
  });

  it.skip('should display a multiple choice quiz when the play button is clicked', () => {
    cy.get('a[id=play]')
      .click()
    cy.contains('h2')
    cy.get('section[class=answer-section]')
      .contains('button')
  });

  it.skip('should give immediate and accurate feedback when an answer is selected', () => {
    cy.get('a[id=play]')
      .click()
    cy.get('section[class=quote-section]')
  });

  it.skip('should disable all answer buttons when one is selected', () => {


  });

  it.skip('should allow users to see the next quote', () => {
    cy.get('a[id=play]')
    .click()

  });

  it.skip('should allow users to save a quote of their choosing', () => {
    cy.get('a[id=play]')
    .click()

  });

  it.skip('should display a list of saved quotes', () => {
    cy.get('a[id=saved-quotes]')
      .click()

  });

  it.skip('should allow users to remove a selected quote', () => {
    cy.get('a[id=saved-quotes]')
      .click()

  });
})


describe('Requests', () => {
  it.skip('should reveal an error message when the server returns a 404 status code', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://game-of-thrones-quotes.herokuapp.com/v1/characters'
    },
    {
      statusCode: 404
    })
    
    cy.visit.skip('http://localhost:3000/')
    cy.get('h2[class=error-message]').should('contain', 'We\'re sorry, an error has occurred. Please try again later.')
  });

  it.skip('should reveal an error message when the server returns a 500 status code', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://game-of-thrones-quotes.herokuapp.com/v1/characters'
    },
    {
      statusCode: 500
    })

    cy.visit.skip('http://localhost:3000/')
    cy.get('h2[class=error-message]').should('contain', 'We\'re sorry, an error has occurred. Please try again later.')
  });
})