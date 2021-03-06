class CustomerElements {

    verAreaCliente(){
        return cy.get('span.ng-binding');
    }

    verDepositoRealizado(){
        return cy.get('span[ng-show=message]');
    }

    verSaqueRealizado(){
        return cy.get('span[ng-show=message]');
    }

    verMeusDepositos(){
        return cy.get('td.ng-binding');
    }

    verMeusSaques(){
        return cy.get('td.ng-binding');
    }

    naoVerLogout(){
        return cy.get('button[ng-click="byebye()"]');
    }
}

export default CustomerElements;