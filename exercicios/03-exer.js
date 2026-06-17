const readline = require('node:readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
async function rodar() {
    const vetor = [];

    for (let i = 0; i < 10; i++) {
        const resposta = await rl.question(`Digite o número ${i + 1}: `);
        const num = Number(resposta);
        vetor.push(num);
    }
    vetor.sort((a, b) => a - b);

    console.log("Vetor final:", vetor);
    rl.close();
}
rodar()