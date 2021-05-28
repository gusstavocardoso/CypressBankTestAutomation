class ManagerData {

    constructor(nome, sobrenome, cep) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._cep = cep;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    get cep(){
        return this._cep;
    }

    set cep(cep){
        this._cep = cep;
    }
}

export default ManagerData;