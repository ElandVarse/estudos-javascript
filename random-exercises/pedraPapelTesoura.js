//pedra, papel e tesoura

//Problema: jogo não aceita que o primeiro input não seja pedra

function computerPlay(){ //Resultado computador
    const computer = ['pedra', 'papel', 'tesoura'];
    var i = ( Math.floor(Math.random() * 3));
    console.log(`Computador escolheu ${computer[i]}`)
    return computer[i]; 
}
function playerSelection(){ //Resultado jogador
    player = prompt('Digita aí meu parceiro');
    var caseSense = player.toLowerCase();
    switch(caseSense){
        case 'pedra':
        case 'papel':
        case 'tesoura':
            console.log(`Você escolheu ${caseSense}`);
            return caseSense;
        default:
            alert('Aí não em cara')
    }
}
function jokenpo(){
    if(playerSelection()==='pedra'){
        switch(computerPlay()){
            case 'pedra':
                alert('Empate');
                break;
            case 'papel':
                alert('Perdeu');
                break;
            case 'tesoura':
                alert('Venceu');
                break;
        }
    }
    else if(playerSelection()==='papel'){
        switch(computerPlay()){
            case 'pedra':
                alert('Venceu');
                break;
            case 'papel':
                alert('Empate');
                break;
            case 'tesoura':
                alert('Perdeu');
                break;
        }
    }
    else if(playerSelection()==='tesoura'){
        switch(computerPlay()){
            case 'pedra':
                alert('Perdeu');
                break;
            case 'papel':
                alert('Venceu');
                break;
            case 'tesoura':
                alert('Empate');
                break;
        }
    }
}
jokenpo();