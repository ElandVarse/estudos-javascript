var size = 8; 

var result = "";

for (var y = 0; y < size; y++) {   //Este for representa a altura, quando o segundo chega ao fim, é pulado uma linha;
  for (var x = 0; x < size; x++) { //Este for vai rodar o tamanho do size representando a largura, enquanto esse for não terminar, não volta ao primeiro;
    if ((x + y) % 2 == 0)
      result += " ";
    else
      result += "#";
  }
  //quebra de linha
  board += "\n";
}

console.log(board)