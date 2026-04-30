const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite o 1º número: ', (n1) => {
    readline.question('Digite o 2º número: ', (n2) => {
        readline.question('Digite o 3º número: ', (n3) => {
            
            const num1 = Number(n1);
            const num2 = Number(n2);
            const num3 = Number(n3);

            const maior = Math.max(num1, num2, num3);

            console.log(`O maior número é: ${maior}`);

            readline.close();
        });
    });
});