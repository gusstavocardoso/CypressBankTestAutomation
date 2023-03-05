/// <reference types="cypress" />

import CustomerData from '../support/pages/data/CustomerData';
import CustomerElements from '../support/pages/Elements/CustomerElements';
import HomePageElements from '../support/pages/Elements/HomePageElements'

describe('Customer XYZ Bank', () => {
    let customer = new CustomerData('Neville Longbottom', '1000000', '500000');
    let customerActions = new CustomerElements();

    before(() => {
        cy.visit(`${Cypress.config().relativeUrl}`);
    });

    after(() => {
        cy.logoutCustomer();

        customerActions.naoVerLogout().should('not.be.visible');
    });

    it('Devo acessar a home page', () => {
        let managerBank = new HomePageElements();
        managerBank.onHomePage().should('have.text', 'XYZ Bank');
    });

    it('Devo logar na minha conta', () => {
        cy.loginCustomer(customer.nome);

        customerActions
            .verAreaCliente().should('have.text', 'Neville Longbottom');;
    });

    it('Devo fazer um depósito na minha conta', () => {
        cy.depositoCliente(customer.deposito);

        customerActions
            .verDepositoRealizado()
            .should('have.text', 'Deposit Successful');

        cy.homePageBank();
    });

    it('Devo fazer um saque na minha conta', () => {
        cy.loginCustomer('Neville Longbottom');

        cy.saqueCliente(customer.saque);

        customerActions
            .verSaqueRealizado()
            .should('have.text', 'Transaction successful');


        cy.homePageBank();
    });

    it('Devo visualizar as minhas transações realizadas', () => {
        cy.loginCustomer('Neville Longbottom');

        cy.saldoCliente();

        customerActions
            .verMeusDepositos()
            .should('contain.text', '1000000');

        customerActions
            .verMeusSaques()
            .should('contain.text', '500000');
    });
});