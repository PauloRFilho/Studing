var s = "The winter is coming. It's really coming!";

console.log(s);
console.log(s.length);
console.log(s.indexOf("coming")); // somente mostrará a 1ª vez que a palavra apareceu. Se tiver 2x a 2ª não será mostrada.
//console.log(s.LastIndexOf("coming")); última vez que a palavra aparece .... aqui não funciou vou perguntar o porquê
console.log(s.slice(4,10));
console.log(s.slice(4,-8));
console.log(s.substr(4,13)); // a partir da posição 4 conte +13 posições
console.log(s.replace("winter","summer"));//trocar alguma palavra
console.log(s.toUpperCase(s));
console.log(s.toLowerCase(s));
console.log(s + "!!");
console.log(s.concat("!","!","?"));

//converter uma string em uma array

var f="Ned, Jon, Robb, Sansa, Bran, Arya, Rickon";
console.log(f.split(", "));