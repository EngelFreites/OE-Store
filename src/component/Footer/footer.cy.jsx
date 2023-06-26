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

  it('shuold be three icons about social midal', () => {
    cy.get("[data-test=instagram]")
    cy.get("[data-test=facebook]")
    cy.get("[data-test=github]")
  })


})
