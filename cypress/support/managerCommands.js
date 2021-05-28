Cypress.Commands.add('loginManager', () => {
    cy.get('button.btn-primary').contains('Bank Manager Login').click();
});

Cypress.Commands.add('cadastrarCliente', (nome, sobrenome, cep) => {
    cy.get('button[ng-click="addCust()"]').contains('Add Customer').click();

    cy.get('input[placeholder="First Name"]').type(nome);
    cy.get('input[placeholder="Last Name"]').type(sobrenome);
    cy.get('input[placeholder="Post Code"]').type(cep);

    cy.get('button[type=submit]').contains('Add Customer').click();
});

Cypress.Commands.add('abrirContaCliente', (nomeCompleto) => {
    cy.get('button[ng-click="openAccount()"]').contains('Open Account').click();

    cy.get('select').first().select(nomeCompleto);
    cy.get('select').last().select('Dollar');

    cy.get('button[type=submit]').contains('Process').click();
});

Cypress.Commands.add('consultarCliente', (nome) => {
    cy.get('button[ng-click="showCust()"]').contains('Customers').click();

    cy.get('input[placeholder="Search Customer"]').type(nome);
});

Cypress.Commands.add('removerCliente', () => {
    cy.get('button[ng-click="deleteCust(cust)"]').contains('Delete').click()
});