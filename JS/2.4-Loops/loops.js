// 4 tipos de loop: for, for in, while, do while

var x = 0;

/*while(x<=10){
	console.log("x é igual a " + x);
	x= x+1;
}*/

do {
console.log("x é igual a " + x);
	x= x+1;
}
while(x>1);

for (var y=0; y<10; y= y+1){
	console.log(y)
}

var obj = {
	nome:'Jon',
	sobrenome:'Snow'
};

for (var prop in obj){
	//console.log(prop); // vai mostrar somente as chaves, as propriedades do objeto: Nome e Sobrenome
	console.log(obj[prop]); // vai mostrar os valores das propriedades do objeto: Jon e Snow
}