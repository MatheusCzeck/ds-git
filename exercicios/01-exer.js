const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número inteiro: ', (valor) => {
    let numero = parseInt(valor);
    if (valor % 2 == 0){
        console.log(`O número ${valor} é par`);
    }else{
        console.log(`O número ${valor} é impar`);
    }
    readline.close();
  });