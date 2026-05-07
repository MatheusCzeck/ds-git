const usuario = {
    id: 1,
    nome: "Carlos",
    cargo: "Dev"
};
for (let i in usuario) {
    console.log(`${i}: ${usuario[i]}`);
}