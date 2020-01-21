for(var i=1; i<101; i++){
    var num='';
    if(i%3===0){
        num+='Fizz';
    }
    if(i%5===0){
        num+='Buzz';
    }
    console.log(num || i) //ou não retorna variável vazia em relação a uma não vazia

    //Num = num+'nome' serve pra salvar o if anterior, aparecendo a próxima junto. Então o for retorna transformando num em vazia e recomeçando o ciclo;
}
