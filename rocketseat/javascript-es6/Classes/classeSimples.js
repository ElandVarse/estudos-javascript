class Cadastro{
    constructor(nome, sobrenome){
        this.name;
        this. lastName;
    }

    MostraNome(sobrenome){
        this.name='Andre';
        this.lastName=sobrenome;
        console.log(this.name + ' ' + this.lastName);
    }
}

const resultado = new Cadastro(); 

resultado.MostraNome('Alve');