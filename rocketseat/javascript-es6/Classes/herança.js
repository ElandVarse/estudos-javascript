
class usuario { //Classe e nome
    constructor(mail, senha) { //Constructor (Parâmetros)
        this.Email; //this. Atributos
    }

    metodo(Email){ //metodo // função que será chamada dps
        this.mail= Email; // testando atribuição de valor
        console.log(this.mail); //aparecer em tela o resultado procurado
    }
}

class admin extends usuario { //testa extenção da classe usuário
    constructor() {
        super(); //Chama classe pai

        this.nome = 'CachorroLoco'; //criação de novo atributo
    }

    mostraUser() {
        console.log(this.nome);
    }
}

const MinhaLista = new admin(); //atribuição da classe ao const

document.getElementById('botao').onclick = function(){ //É utilizado um botão para chamar a const MinhaLista que armazena a classe
    MinhaLista.metodo('vladimir23@gmail.com'); //MinhaLista chama o metodo(ou qualquer outro nome que queira dar ao metodo), por fim recebe o valor.
}

MinhaLista.mostraUser(); //chamada a parte para testar classe estendida 


