const readline = require('node:readline/promises');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function iniciar() {
    const nomeDigitado = await rl.question('Qual é o seu nome? ');
    const pessoa = {
        nome: nomeDigitado,
        saudar: function() {
            console.log(`Olá, meu nome é ${this.nome}`);
        }
    };
    pessoa.saudar();
    rl.close();
}

iniciar();