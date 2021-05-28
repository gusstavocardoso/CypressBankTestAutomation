Cypress.Commands.add('loginCustomer', (customer) => {
    cy.get('button.btn-primary').contains('Customer Login').click();
    cy.get('select').select(customer);
    cy.get('button[type=submit]').contains('Login').click();
});

Cypress.Commands.add('logoutCustomer', () => {
    cy.get('button[ng-click="byebye()"]').click();
});


Cypress.Commands.add('depositoCliente', (deposito) => {
    cy.get('button[ng-click="deposit()"]').contains('Deposit').click();
    cy.get('input[placeholder=amount]').type(deposito);
    cy.get('button[type=submit]').click();
});

Cypress.Commands.add('saqueCliente', (saque) => {
    cy.get('button[ng-click="withdrawl()"]').contains('Withdrawl').click();
    cy.get('input[placeholder=amount]').type(saque);
    cy.get('button[type=submit]').click();
});

Cypress.Commands.add('saldoCliente', () => {
    cy.get('button[ng-click="transactions()"]').contains('Transactions').click();
});

Cypress.Commands.add('homePageBank', () => {
    cy.get('button[ng-click="home()"]').click();
    cy.wait(1000);
});
