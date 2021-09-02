//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/*
1. Será impresso no console cada item da array (cada objeto) com seus respectivos índices e uma cópia da array usuários. */

/*
2. Será impresso no console uma nova array apenas com os nomes dos ítens/objetos da array usuários. */

/*
3. Será impressono console uma nova array sem o ítem/objeto que contém o apelido "Chijo". */


//EXERCÍCIOS DE ESCRITA DE CÓDIGO
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


// a)
/*  function separaNome (arrayDeObjetos) {
    return arrayDeObjetos.nome
 } */

/*  const nomePets = pets.map(separaNome)
console.log(nomePets) */

//b)
/* function separaSalsicha (arrayDeObjetos) {
    return arrayDeObjetos.raca === "Salsicha"
}

const petsSalsicha = pets.filter(separaSalsicha)
console.log(petsSalsicha)
const nomeDosPetsSalsicha = petsSalsicha.map(separaNome)
console.log(nomeDosPetsSalsicha) */


// c)
/* function separaPoodle (arrDeObjetos) {
    return arrDeObjetos.raca ==='Poodle'
} */
/* --------------------------- TRECHO ADICIONADO APÓS VER A RESOLUÇÃO DOS EXERCÍCIOS ----------------------------
const poodles = pets.filter(separaPoodle)
console.log(poodles)
const mensagemPoodles = poodles.map((arrPoodles) => {
    return `Você ganhou cupom de 10% de desconto para tosar o/a ${arrPoodles.nome}`
})
console.log(mensagemPoodles)
--------------------------- TRECHO ADICIONADO APÓS VER A RESOLUÇÃO DOS EXERCÍCIOS ---------------------------- */

/* const petsPoodle = pets.filter(separaPoodle)
const nomeDosPetsPoodle = petsPoodle.map(separaNome)
function mensagemParaPoodles (arrayDeObjetos) {
    let mensagem = [] 
    for(let i = 0; i < arrayDeObjetos.length; i++) {
        mensagem.push(`Você ganhou um cupom de desconto de 10 % para tosar o/a ${arrayDeObjetos[i]}`)   
    }
    return mensagem
}
console.log(mensagemParaPoodles(nomeDosPetsPoodle)) */

//2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

/* 
a)
function separaNome (arrDeObjetos) {
     return arrDeObjetos.nome
 }

 const nomesProdutos = produtos.map(separaNome)
 console.log(nomesProdutos) */

/* 
b)--------------------------- TRECHO ADICIONADO APÓS VER A RESOLUÇÃO DOS EXERCÍCIOS ----------------------------
const precoComDesconto = produtos.map((arrDeObjetos) => {
    return {nome: arrDeObjetos.nome, preco: arrDeObjetos.preco * 0.95}
}) 

console.log(precoComDesconto) 
--------------------------- TRECHO ADICIONADO APÓS VER A RESOLUÇÃO DOS EXERCÍCIOS ---------------------------- */

/* 
c)
function separaBebidas (arrDeObjetos) {
    return arrDeObjetos.categoria === "Bebidas"
}

const soBebidas = produtos.filter(separaBebidas)
console.log(soBebidas) */


/* d)--------------------------- TRECHO ADICIONADO APÓS VER A RESOLUÇÃO DOS EXERCÍCIOS ----------------------------
const soYpe = produtos.filter((arrDeObjetos) => {
    return arrDeObjetos.nome.includes('Ypê')
})
console.log(soYpe) 
--------------------------- TRECHO ADICIONADO APÓS VER A RESOLUÇÃO DOS EXERCÍCIOS ---------------------------- */

/* --------------------------- TRECHO ADICIONADO APÓS VER A RESOLUÇÃO DOS EXERCÍCIOS ---------------------------- 
e)function transformaEmFrase (arrDeObjetos) {
    return `Compre ${arrDeObjetos.nome} por ${arrDeObjetos.preco}`
}

const propagandaYpe = soYpe.map(transformaEmFrase)
console.log(propagandaYpe) 
--------------------------- TRECHO ADICIONADO APÓS VER A RESOLUÇÃO DOS EXERCÍCIOS ---------------------------- */