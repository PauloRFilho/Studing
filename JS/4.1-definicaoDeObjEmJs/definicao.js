//declaração de objetos
// dentro das chaves de guarda valores, nesse caso guardei variaveis nome, sobrenome e idade. Elas são chamadas
// de propriedades
var obj = { 
	nome: "Jon", 
	sobrenome: "Snow",
	idade: 16,
	apresentar: mostrar
};

function mostrar () {
		console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
	}

console.log(obj.idade);
obj.apresentar();