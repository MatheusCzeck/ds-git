// const readLine = require('readline');
import readLine from 'readline';

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual é o seu nome?\n", (answer) => {
    console.log(`Olá ${answer}!`);
    rl.close();
})