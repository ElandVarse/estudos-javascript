//Na real, eu não entendi bem o que é pra fazer nos dois exercícios, juntei o que entendi dos dois e fiz 1 cod só.
//Não coloquei o carregando :(

function nome(){
    var userElement = document.querySelector('#nome').value //valor do input
    var lista = document.createElement('ul'); //Criar lista pros dois casos

    axios.get('https://api.github.com/users/' + userElement +'/repos') //valor do input é utilizado pra checar o nome de usuário
    .then(function(response) { 
        var limi = response.data.length; // variável para limitar o for ao número máximo de repositórios

        for(i=0; i<=limi-1; i++){  //For para navegar por todos os repositórios
            var item = document.createElement('li') //Criando os itens da lista
            
            item.appendChild(document.createTextNode(response.data[i].name)) //Aqui é chamado o nome dos repositórios no github
            lista.appendChild(item) 
            
            document.querySelector('#app').appendChild(lista); //Aqui é adicionado a lista a div App criada no html
        }
    })
    .catch(function(error){
        var texto = document.createElement('p')
        
        texto.appendChild(document.createTextNode('Erro 404 - Not found'));
        document.querySelector('#app').appendChild(texto);
    })
}