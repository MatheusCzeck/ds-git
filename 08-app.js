// Objetos 

let nome = "Czeck"
let idade = 43
let status = true

let objVazio = {};
let pessoa = {
    nome: "Matheus",
    sobrenome: "Czeck",
    idade: 43,
    status: true,
    nomeCompleto: function(){
        return this.nome + " " + this.sobrenome
    } 
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(objVazio)
console.log(pessoa.nomeCompleto())

let senai = {
    nome: "Senai",
    endereco: "Rua Paula Gomes 270",
    departamentos: {
        pedagogia: "Danielle",
        coordenador: "Calegari",
    },
    cursos: [
        {
            nome: "Desenvolvimento de Sistemas",
            horas: 2000
        },
        {
            nome: "Automação",
            horas: 1000
        },
        {
            nome: "Suporte e manutenção em Redes",
            horas: 1500
        }
    ]
}

console.log(senai)
console.log(senai.departamentos.coordenador)
console.log(senai.cursos[1].horas)

let nomePessoa = pessoa["nome"]
console.log(pessoa.nome)
console.log(nomePessoa);

// Alterando valores
senai.cursos[1].horas = 3000
console.log(senai.cursos[1].horas)

// Referencias
let curso = {
    sigla: "DS",
    nome: "Desenvolvimento de Sistemas",
    horas: 2000
}
console.log("Curso", curso)

let x = curso

x.sigla = "SI"
x.nome = "Sistema de Informação"
x.horas = 3000

console.log("Curso", curso)
console.log("X", x)

let y = {
    sigla: curso.sigla,
    nome: curso.nome,
    horas: curso.horas
}

y.sigla = "TI"
y.nome = "Tecnologia da Informação"
y.horas = 4000
console.log("Y", y)

// Deletar propriedade
console.log("Curso", curso)
delete curso.horas
console.log("Curso", curso )



// Verificar a existência de uma propriedade
console.log("sigla" in curso)
console.log("horas" in curso)