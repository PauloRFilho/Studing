
// coloco a declaração dentro da função para proteger ela de alterações
// mas não consigo usar mais ela após a função
//daí vem o closure
//assim conseguirei acessar a variável fora da função e não irei alterá-la, a não ser com a própria variável

var tick = (function(){
	var contador = 0;

	return function () {
		contador = contador + 1;
		console.log(contador);
	}
})();

tick();
tick();
tick();
