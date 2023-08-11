describe('Settings page', () => {
  beforeEach(() => {
   cy.visit('https://github.com/lucasbeninca/cyFrame');
  })

  it.only('correctly submits a credit card form', () => {
    //run on electron
    cy.get('.d-sm-flex > .flex-auto').should('have.text','\n \n This branch is 4 commits ahead of wlsf82:main.\n \n  ')

   
    })
  })

