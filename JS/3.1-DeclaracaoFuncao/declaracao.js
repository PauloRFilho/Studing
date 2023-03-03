//3 formar de declarar uma função

function dizerOi(nome /*argumentos*/){
	console.log("Olá "+ nome);
}

dizerOi("Jon");
dizerOi("Robb");

//uma outra forma de declarar uma função armazenando ela dentro de uma variável

var dizerOla = function (nome){
	console.log("Olá "+nome);
};

dizerOla("Bran")

//terceira maneira: construtor de uma função - pouco usado

var dizerTchau = new Function ("nome", "console.log('Tchau ' + nome);"); //aceita n argumentos e o conteúdo da função em formato de string 

dizerTchau("Rickon");