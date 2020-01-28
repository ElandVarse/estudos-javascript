const arr = [1,2,3,4,5,6,7,8,9];

const newArr = arr.map(function(item, index){ //arr.map = andar pelo array sem usar for
    return item + index; //somando o próximo com o anterior
});

console.log(newArr);

const soma = arr.reduce(function(total, next){ //total é o resultado da soma, next é o próximo; total começa em 0 e vai adicionar conforme anda pelo array
    return total + next; //somando todos
}); 

console.log(soma);

const filtrar = arr.filter(function(item){ //item = cada número
    return item % 2 === 0; //se o item for par então ele vai aparecer
});

console.log(filtrar)

const verificar = arr.find(function(item){ //find procura algo específico no array
    return item === 4;
});

console.log(verificar);
