//isolar um escopo dentro do js -> funcao autoinvocada
//no instante da declaração já é possível executá-la

(function(){
	var a = 1; // esse a só existe dentro deste escopo, fora dele ainda não foi declarada.
	console.log(a);
})(); // quando precisamos isolar o escopo
