import { Footer } from "./Footer"

describe('footer', () => {

  beforeEach (()=>{
    cy.mount(<Footer />)
  })

  it('the component can render', () => {
    cy.get(<footer/>)
  }),

  it('shoul be the specific text content', ()=>{
    cy.contains('Creado por Engel')
  })
})
