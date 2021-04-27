describe('Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.intercept('https://game-of-thrones-quotes.herokuapp.com/v1/characters', { fixture:'character_obj.json' })
      .visit('http://localhost:3000/')
    cy.clearLocalStorage()
  });
  
  it('should display a header, footer, and an image on load', () => {
    cy.get('header').should('be.visible')
    cy.get('footer').should('be.visible')
    cy.get('img[class=home-img]').should('be.visible')
  });

  it('should display a multiple choice quiz when the play button is clicked', () => {
    cy.get('a[id=play-link]')
      .click()
    cy.get('h2').should('be.visible')
    cy.get('section.answer-section').children().should('have.length', 4)
  });

  it('should give immediate and accurate feedback when an selected answer is correct', () => {
    cy.get('a[id=play-link]')
      .click()
    cy.get('button.true')
      .click()
    cy.get('h2.feedback').should('be.visible')
    cy.get('h2.feedback').contains('Correct!')
  });

  it('should give immediate and accurate feedback when an selected answer is incorrect', () => {
    cy.get('a[id=play-link]')
      .click()
    cy.get('button.false').first()
      .click()
    cy.get('h2.feedback').should('be.visible')
    cy.get('h2.feedback').contains('Incorrect!')
  });


  it('should disable all answer buttons when one is selected', () => {
    cy.get('a[id=play-link]')
    .click()
    cy.get('button.false').first()
      .click()
    cy.get('h2.feedback').should('be.visible')
    cy.get('h2.feedback').contains('Incorrect!')
    cy.get('button.true').should('have.css', 'pointer-events', 'none')
    cy.get('button.true').should('have.css', 'cursor', 'not-allowed')
  });

  it('should allow users to see the next quote', () => {
    cy.get('a[id=play-link]')
      .click()
    cy.get('button.next')
      .click()
    cy.get('button.true').should('not.have.class', 'selected')
    cy.get('button.false').first().should('not.have.class', 'selected')
  });

  it('should allow users to save a quote of their choosing', () => {
    cy.get('a[id=play-link]')
      .click()
    cy.get('button.save')
      .click()
    cy.get('button.save')
      .contains('Saved')
  });

  it('should display a list of saved quotes', () => {
    cy.get('a[id=play-link]')
    .click()
    cy.get('button.save')
      .click()
    cy.get('a[id=saved-quotes-link]')
      .click()
    cy.get('section.center-piece').children().should('have.length', 1)
  });

  it.only('should allow users to remove a selected quote', () => {
    cy.get('a[id=play-link]')
    .click()
    cy.get('button.save')
      .click()
    cy.get('a[id=saved-quotes-link]')
      .click()
    cy.get('button.remove-button')
      .click()
    cy.get('section.center-piece').children().should('have.length', 0)
  });
})


describe('Requests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it.skip('should reveal an error message when the server returns a 404 status code', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://game-of-thrones-quotes.herokuapp.com/v1/characters'
    },
    {
      statusCode: 404,
    })
    
    cy.visit('http://localhost:3000/')
    cy.get('h1[class=error-message]').should('contain', 'We\'re sorry, an error has occurred. Please try again later.')
  });

  it.skip('should reveal an error message when the server returns a 500 status code', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://game-of-thrones-quotes.herokuapp.com/v1/characters'
    },
    {
      statusCode: 500
    })

    cy.visit('http://localhost:3000/')
    cy.get('h1[class=error-message]').should('contain', 'We\'re sorry, an error has occurred. Please try again later.')
  });
})