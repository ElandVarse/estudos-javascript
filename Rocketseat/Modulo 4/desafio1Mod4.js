function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        setTimeout (function() { 
            if (idade >= 18) {
                resolve()
        }   else 
                reject() }, 2000,) 
    })
}

checaIdade(28)
    .then(function() {
        console.log("Maior que 18");
    })

    .catch(function() {
            console.warn("Menor que 18");
    });

