/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve renderizar 0 contatos', () => {
        cy.get('.sc-beqWaB eQdhbg contato').should('have.length', 0)
    })
})