// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*
1.
Matheus Nachtergaele
Virginia Cavendish
{canal: "Globo", hoario: "14h"}*/

/*
2.
a)
{nome: "Juca",
idade: 3,
raca: "SRD"
}

{nome: "Juba"
idade: 3
raca: "SRD"
}

{nome: "Jubo"
idade: 3
raca: "SRD"
}*/

/* 
b)
copia a estrutura do objeto em questão*/

/*
3.
a) 
Caio[false]
undefined*/

/* 
b)
A função seleciona o objeto em questão e retorna a propriedade
atribuida à este. Ao receber uma propriede que não estava definida
no objeto, a função retorna o valor undefined. */

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1. 
//a)

/* const pessoa = {
    nome: "Antonio",
    apelidos: ["Tonim", "Tonhão", "Totó"]
}

function mensagem(object) {
    console.log(`Eu sou ${object.nome}, mas pode me chamar de: 
    ${object.apelidos[0]}, ${object.apelidos[1]} ou ${object.apelidos[2]}`)
}
mensagem(pessoa) */

/* 
b)
const pessoa1 = {...pessoa, apelidos: ["Barney", "ET", "Bilu"]}

mensagem(pessoa1) */

/* 
2.
const nome = {
    nome: "Larissinha",
    idade: "28",
    profissão: "Pedreira",
}

const nome1 = {
    nome: "Leonardo",
    idade: "29",
    profissão: "Pedrista",
}

function array(object) {
    return [object.nome, object.nome.length, object.idade, object.profissão, object.profissão.length]
}

console.log(array(nome))
console.log(array(nome1)) */

//----------------- AINDA EM RESOLUÇÃO
let carrinho = []

let maca = {
    nome: "maçâ",
    disponibilidade: true
}

let pera = {
    nome: "Pêra",
    disponibilidade: true
}

let melancia = {
    nome: "melancia",
    disponibilidade: true
}

function compras(objeto) {
    carrinho.push(objeto)
}

compras(maca)
compras(pera)
compras(melancia)

console.log(carrinho)