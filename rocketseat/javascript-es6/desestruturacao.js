const usuario ={
    nome: 'Andre',
    idade: 20,
    endereco: {
        cidade: 'Sydney',
        pais: 'Australia',
    },
};

//Atribuir valor - com desestruturação
const {nome, idade, endereco: {cidade} } = usuario;

console.log(nome, idade, cidade);

//função com desestruturação
function mostraNome({nome, idade}) {
    console.log(nome, idade);
}

mostraNome(usuario);

/* 
Atribuir valor - sem desestruturação

const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;

Função sem desestruturação


function mostraNome(usuario){
    console.log(usuario.nome)
}

mostraNome();

*/


