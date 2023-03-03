//transformando um array em uma string

var array = "Ned Jon Robb Bran Rickon".split(' ');
console.log(array);
console.log(array.toString());
console.log(array.join(', '));

//para inserir um novo elemento no array
array.push("Sansa");
console.log(array); // interessante perceber que o Sansa não apareceu no primeiro console.log, somente quando declarado

array.unshift("Paul"); // posicionou um novo elemento Paul no começo do array
console.log(array);

array.pop(); // tira o último elemento do array
console.log(array);// aqui saiu a Sansa
var saiu = array.pop(); // aqui é para mostrar quem foi retirado mas como novamente fiz um pop quem saiu foi o Rickon
console.log(saiu); // monstrando que quem saiu foi o Rickon
console.log(array); // novo array sem a Sansa e o Rickon pois foram digitados 2x o pop 

var entrou = array.shift();
console.log(entrou);// mostrando que o Paul foi retirado pois é o 1º da lista

//alterar um elemento do array
array[1] = "Jon Snow";
console.log(array);

var slice = array.slice(2); // primeiro argumento: é a posição exata de onde começa. O segundo argumento é a 
// posição extamente anterior ao número. Exemplo: (2,4) Serão fatiados o Robb (2) e o Bran (3)
// o slice não altera o array original
// já o splice vai alterar o array original
console.log(slice);

//retirar e inserir dados do array
var splice = array.splice(1,0,"Arya","Nelson"); // 1º arg: posição que será eliminada e que iniciará a incersão dos novos elementos
// 2º arg: qtd que serão elimidados, Demais: quais são os novos elementos (se quiser apenas excluir basta não adicionar)
console.log(array);


//concatenar 2 arrays
concatenado=array.concat(splice, slice);
console.log	(concatenado);







