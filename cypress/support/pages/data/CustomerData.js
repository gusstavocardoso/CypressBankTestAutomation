class CustomerData {

    constructor(nome, deposito, saque){
        this._nome = nome;
        this._deposito = deposito;
        this._saque = saque;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        return this._nome = nome;
    }

    get deposito(){
        return this._deposito;
    }

    set (deposito){
        return this._deposito = deposito;
    }

    get saque(){
        return this._saque;
    }

    set saque(saque){
        return this._saque = saque;
    }
}

export default CustomerData;