var x = 34.00; 
var y = 456e5// 45600000 = 456 vezes 10 elevado a 5;
var z = 123e-6 // 0.000123 = 123 vezes 10 elevado a -6

//o JS consegue armazenar com precisão somente até 15 dígitos

var a = 9999999999999999 // somente máximo 15 dígitos
console.log(a); // ele irá arredondar para o mais próximo que ele consegue

var b = 0x100; // mostrar em exadecimal
console.log(b);

//em octal funciona no Node.Js mas ainda não está propagada
var c = 07777; // se começar o número com 0 ele irá ser convertido em octal
console.log(c);
console.log(c.toString(2));// converter em binário
console.log(c.toString(16));// converter em exadecimal
console.log(c.toString(8));// converter em octal
console.log(y.toExponential(4));// quero 4 casas decimais. Se não colcar nada ele irá 4.56e+7
console.log(z.toFixed(2)); // arredondar para 2 casas decimais
console.log((3.357).toFixed(2));
console.log((3.357).toPrecision(2));

















