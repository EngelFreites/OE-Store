import { Footer } from "./Footer"

describe('footer', () => {

  it('the component can render', () => {
    cy.mount(<Footer/>)
  }),

  it('shoul be the specific text content', ()=>{
    cy.mount(<Footer />)
    cy.contains('Creado por Engel')
  })
})
