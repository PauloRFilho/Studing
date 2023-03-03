function Stark(nome, idade, corDoCabelo) {
	this.nome = nome;
	this.idade = idade;
	this.corDoCabelo = corDoCabelo;

	this.sobrenome = "Stark";
	this.apresentar = function function_name() {
		console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
	}
}

var ned = new Stark("Ned", 40, "Preto");
//ned.darTchau = function() {console.log("Tchau");}; dessa forma somente o Ned consegue dar Tchau. A Sansa não consegue.

Stark.prototype.darTchau=function() {console.log("Tchau");}; //este comando é como se eu tivesse escrito uma nova
//linha de código dentro da funcion stark só que preferi adicionar um comando a ele daqui de fora mesmo. Daí a
// Sansa vai conseguir dar tchau se ela quiser agora.

ned.darTchau();
ned.apresentar();

var sansa = new Stark ("Sansa", 13, "Cobre");
sansa.darTchau();
sansa.apresentar();



// console.log(ned);
// console.log(sansa);