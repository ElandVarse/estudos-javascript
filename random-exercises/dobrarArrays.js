//Dobrar valores pares da matrix

var matrix = [
    [1, 11, 32],
    [13, 14, 16],
    [7, 6, 2],
    ]
    
    //Maneira bruta de fazer
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix.length; j++){
            if(matrix[i][j]%2===0){
                matrix[i][j]+=matrix[i][j]
        }
    }
}
console.log(matrix);

     /*  Maneira curta
            let arr = matrix.map(item =>
                item.map(number => 
                    number%2===0 ? number*2 : number)) 
    */
    
