//pedra, papel e tesoura

//Problema: jogo não aceita que o primeiro input não seja pedra

//Seleção do computador - randomica
function computerPlay(){ 
    const computer = ['pedra', 'papel', 'tesoura'];
    var i = ( Math.floor(Math.random() * 3));
    return computer[i]; 
}
//Seleção do jogador
function playerSelection(){ 
    player = prompt('Digita aí meu parceiro');
    var caseSense = player.toLowerCase();
    switch(caseSense){
        case 'pedra':
        case 'papel':
        case 'tesoura':
            return caseSense;
        default:
            alert('Aí não em cara')
    }
}
//Jogo em si
function jokenpo(){
    //Lembrando que dentro do escopo de uma função, variáveis valem apenas pra si
    let player = playerSelection();
    let computer = computerPlay();

    switch(player){
        case 'pedra':
        switch(computer){
            case 'pedra':
                alert(`Computador escolheu ${computer}`);
                alert('Empate')
                break;
            case 'papel':
                alert(`Computador escolheu ${computer}`);
                alert('Você perdeu')
                break;
            case 'tesoura':
                alert(`Computador escolheu ${computer}`);
                alert('Você venceu')
                break;
        }
        break;

    case 'papel':
        switch(computer){
            case 'pedra':
                alert(`Computador escolheu ${computer}`);
                alert('Você venceu')
                break;
            case 'papel':
                alert(`Computador escolheu ${computer}`);
                alert('Empate')
                break;
            case 'tesoura':
                alert(`Computador escolheu ${computer}`);
                alert('Você perdeu')
                break;
        }
    break;

    case 'tesoura':
        switch(computer){
            case 'pedra':
                alert(`Computador escolheu ${computer}`);
                alert('Você perdeu')
                break;
            case 'papel':
                alert(`Computador escolheu ${computer}`);
                alert('Você ganhou')
                break;
            case 'tesoura':
                alert(`Computador escolheu ${computer}`);
                alert('Empate')
                break;
         }
         break;
    }
}
jokenpo();