//methods String

let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let tamanho = text.lenght;
let minusculo = text.toLocaleLowerCase();
let substituiAto4 = text.replace("A", "4");
console.log(text);
console.log(tamanho);
console.log(minusculo);
console.log(substituiAto4)

//methods Number

let numero = 123456789;
let numeroStr = "123456789"

console.log(numero);
console.log(numeroStr)

let a = "10";
let b = "2.1";
let somaStr = a + b;
let somaNum = Number(a) + Number(b);
let somaFloat = parseFloat(a) + parseFloat(b);
let somaInt = parseInt(a) + parseInt(b);
console.log(somaStr);
console.log(somaNum);
console.log(somaFloat)
console.log(somaInt)
console.log(typeof somaInt) 
console.log(somaInt.toString())
console.log(typeof somaInt.toString())