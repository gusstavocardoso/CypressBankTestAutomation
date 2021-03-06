/// <reference types="cypress" />

import HomePageElements from '../support/pages/Elements/HomePageElements'
import ManagerData from '../support/pages/data/ManagerData'
import ManagerElements from '../support/pages/Elements/ManagerElements';

describe('Manager XYZ Bank', () => {
    let customer = new ManagerData('John','Petrucci','14680-000');
    let managerActions = new ManagerElements();

    before(() => {
        cy.visit(`${Cypress.config().relativeUrl}`);
    });

    it('Devo acessar a home page do banco', () => {
        let managerBank = new HomePageElements();
        managerBank.onHomePage().should('have.text', 'XYZ Bank');
    });

    it('Devo cadastrar um cliente', () => {
        cy.loginManager();

        cy.cadastrarCliente(customer.nome, customer.sobrenome, customer.cep);

        cy.on('window:alert', (customerAdd) => {
            expect(customerAdd).to.contains('Customer added successfully');
        });
    });

    it('Devo abrir uma conta para um cliente', () => {
        cy.abrirContaCliente(`${customer.nome} ${customer.sobrenome}`)

        cy.on('window:alert', (accountCreated) => {
            expect(accountCreated).to.contains('Account created successfully');
        });
    });

    it('Devo consultar os meus clientes', () => {
        cy.consultarCliente(customer.nome);

        managerActions
            .verClientePesquisado()
            .contains('Petrucci')
            .should('contain.text', 'Petrucci');
    });

    it('Devo remover um cliente', () => {
        cy.removerCliente();
    
        managerActions
            .pesquisarClienteRemovido()
            .contains('Petrucci')
            .should('not.exist'); 
    });
});