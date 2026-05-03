const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite um número inteiro: ', (valor) => {
  let numero = parseInt(valor);
  let soma = String(numero)
    .split('')
    .reduce((acc, digito) => acc + parseInt(digito), 0);
  console.log(`Soma dos seus digitos: ${soma}`);
  readline.close();
});