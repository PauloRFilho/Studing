function dizerOi(nome) { // forma mais tradicional de chamar uma função.
	console.log ("Oi, " + nome);
	//console.log(this); mostra o contexto global
}


dizerOi.call({},"Arya");

//outra forma de invocar

dizerOi.apply({}, ["Arya"]);