/// <reference types="cypress" />

import CustomerData from '../support/pages/data/customerData';
import CustomerElements from '../support/pages/Elements/CustomerElements';
import HomePage from '../support/pages/Elements/HomePage'

describe('Customer XYZ Bank', () => {
    let customer = new CustomerData('Neville Longbottom', '1000000', '500000');
    let customerElements = new CustomerElements();

    before(() => {
        cy.visit(`${Cypress.config().relativeUrl}`);
    });

    after(() => {
        cy.logoutCustomer();

        let logout = cy.get('button[ng-click="byebye()"]');
        logout.should('not.be.visible');
    });

    it('Devo acessar a home page', () => {
        let managerBank = new HomePage();
        managerBank.onHomePage().should('have.text', 'XYZ Bank');
    });

    it('Devo logar na minha conta', () => {
        cy.loginCustomer(customer.nome);

        customerElements
            .verAreaCliente().should('have.text', 'Neville Longbottom');;
    });

    it('Devo fazer um depósito na minha conta', () => {
        cy.depositoCliente(customer.deposito);

        customerElements
            .verDepositoRealizado()
            .should('have.text', 'Deposit Successful');

        cy.homePageBank();
    });

    it('Devo fazer um saque na minha conta', () => {
        cy.loginCustomer('Neville Longbottom');

        cy.saqueCliente(customer.saque);

        customerElements
            .verSaqueRealizado()
            .should('have.text', 'Transaction successful');


        cy.homePageBank();
    });

    it('Devo visualizar as minhas transações realizadas', () => {
        cy.loginCustomer('Neville Longbottom');

        cy.saldoCliente();

        customerElements
            .verMeusDepositos()
            .should('contain.text', '1000000');

        customerElements
            .verMeusSaques()
            .should('contain.text', '1000000');
    });
});