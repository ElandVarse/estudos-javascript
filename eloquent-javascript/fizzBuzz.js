var num;


for(num=1; num<101; num++) {
    var result= '';
    if(num%3===0){
        result+='Fizz'
    }
    if(num%5===0){
        result+='Buzz'
    }
    console.log(result || num)
}
