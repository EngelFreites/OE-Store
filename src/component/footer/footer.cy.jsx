import Footer from "./Footer"

describe('footer.cy.jsx', () => {
  beforeEach(()=>{
    cy.mount(<Footer />)
  })

  it('should be the text', () => {
    cy.contains('Create by Engelbert')
  })

  it('should be the element is a h1', () => {
    cy.get('h1').should('contains.text', 'Create by Engelbert')
  })

  it('should be three icon about medial social social networks', () =>{
    cy.get('[data-cy="icon"]').should('have.length', 3)
  })

})
