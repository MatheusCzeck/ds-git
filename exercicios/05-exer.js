const readline = require('node:readline/promises');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
async function rodar() {
    const nome = await rl.question('Digite o nome: ');
    const idade = await rl.question('Digite a idade: ');
    const cargo = await rl.question('Digite o cargo: ');

    const usuario = {
        nome: nome,
        idade: idade,
        cargo: cargo,
        saudar: function() {
            console.log(`Olá, meu nome é ${this.nome}`);
        }
    };

    console.log('\n--- Listando as CHAVES do objeto ---');

    for (let chave in usuario) {
        console.log(`Chave encontrada: ${chave}`);
    }
    rl.close();
}

rodar();