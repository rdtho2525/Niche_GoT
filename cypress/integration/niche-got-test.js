describe('Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });
  
  it('should display a header, footer, and an image on load', () => {

  });

  it('should display a multiple choice quiz when the play button is clicked', () => {

  });

  it('should ', () => {
  });

  it('should reveal a selected movie\'s details when clicked', () => {
  });

  it('should hide the application\'s home view when a movie\'s details are displayed', () => {
  });

  it('should hide the applications\'s details view when the user returns to the home page', () => {
  });

  it('should be able to navigate back and forth with browser arrows', () => {
  });

  it('should be able to filter movie cards by user input in search field from home view', () => {
  });

  it('should be able to filter movie cards by user input in search field from details view', () => {
  });

  it('should be able to sort movie cards by Freshness in descending order', () => {
  });

  it('should be able to sort movie cards by Title in descending order', () => {
  });


  it('if a user selects a movie from the list of filtered or sorted results, the center message should be hidden', () => {
  });
})


describe('Requests', () => {
  it.skip('should reveal an error message when the server returns a 404 status code', () => {
    cy.intercept({
      method: 'GET',
      url: ''
    },
    {
      statusCode: 404
    })
    
    cy.visit('http://localhost:3000/')
    cy.get('h2[class=message]').should('contain', 'We\'re sorry, an error has occurred. Please try again later.')
  });

  it.skip('should reveal an error message when the server returns a 500 status code', () => {
    cy.intercept({
      method: 'GET',
      url: ''
    },
    {
      statusCode: 500
    })

    cy.visit('http://localhost:3000/')
    cy.get('h2[class=message]').should('contain', 'We\'re sorry, an error has occurred. Please try again later.')
  });

  it.skip('should reveal an error message when the server returns a 404 status code', () => {
    cy.intercept({
      method: 'GET',
      url: ''
    },
    {
      statusCode: 404
    })

    cy.visit('http://localhost:3000/337401')
    cy.get('h2[class=message]').should('contain', 'Details for this movie are not available at this time. Please check back later.')
  });

  it.skip('should reveal an error message when the server returns a 500 status code', () => {
    cy.intercept({
      method: 'GET',
      url: ''
    },
    {
      statusCode: 500
    })

    cy.visit('http://localhost:3000/337401')
    cy.get('h2[class=message]').should('contain', 'Details for this movie are not available at this time. Please check back later.')
  });
})