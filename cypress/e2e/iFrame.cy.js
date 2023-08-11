describe('Settings page', () => {
  beforeEach(() => {
   cy.visit('https://github.com/lucasbeninca/cyFrame');
  })

  it.only('correctly submits a credit card form', () => {
    cy.get('.d-sm-flex > .flex-auto').should('have.text','\n This branch is up to date with wlsf82/cyFrame:main.\n  ')

   
    })
  })

