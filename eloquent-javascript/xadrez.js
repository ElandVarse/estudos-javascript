var size = 8; 

var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

for (var y = 0; y < size; y++) {   //Este for representa a altura, quando o segundo chega ao fim, é pulado uma linha;
  for (var x = 0; x < size; x++) { //Este for vai rodar o tamanho do size representando a largura, enquanto esse for não terminar, não volta ao primeiro;
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  //quebra de linha
  board += "\n";
}

console.log(board)