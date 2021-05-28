class ManagerElements {

    verClientePesquisado(){
        return cy.get('td.ng-binding');
    }

    pesquisarClienteRemovido(){
        return cy.get('td');
    }
}

export default ManagerElements;