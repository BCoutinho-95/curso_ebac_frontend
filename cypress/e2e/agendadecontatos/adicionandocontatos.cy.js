/// <reference types="cypress" />

describe('Testes para agenda de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar 1 contato', () => {
        cy.get('input[type="text"]').type('bruno coutinho')
        cy.get('input[type="email"]').type('brunocoutinho@teste.com.br')
        cy.get('input[type="tel"]').type('32 12345678')
        cy.get('.adicionar').click()
    })
})

describe('Testes para agenda de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar o contato cadastrado', () => {
        cy.get('.edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="text"]').type('bruno marques coutinho')
        cy.get('input[type="email"]').type('brunocoutinho@teste.com')
        cy.get('input[type="tel"]').type('32 12345678')
        cy.get('.alterar').click()
    })

    it('Deve deletar o contato cadastrado', () => {
        cy.get('.sc-beqWaB')
        cy.get('.delete').click()
    })
})