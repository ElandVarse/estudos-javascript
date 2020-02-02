const arr = [1, 2, 3, 4 ,5];

/*  const newArr = arr.map(function(item){ original
    return item*2;
}); */

/* const newArr = arr.map((item) =>{
    return item*2;
    Pro caso se tiver mais de uma linha aqui dentro
}); */ 

const newArr = arr.map(item => item * 2); //Se for uma linha só  

console.log(newArr);

const teste = () => ({nome: 'Andre'});

console.log(teste());