describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get("h1").contains('O/E')

    cy.get("li").eq(0).contains("NIÑOS")
  })
})