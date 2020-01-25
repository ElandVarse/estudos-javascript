//Checar se número tem 0 e quantos 0 tem

var resultado=0;
var resposta=0;
var arr= new Array(); //cria array vazio

function zeros(num1, num2){
  for(i=num1; i<=num2; i++){ 
        var n= i.toString();
        arr = n.split('');
        for(var j=0; j<=arr.length; j++){
            if(arr[j]==='0') {
                resposta++;
            }
        }
    }
        console.log(resposta);
}
    
zeros(1, 90);
