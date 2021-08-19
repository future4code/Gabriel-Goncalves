//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*
1.
a) o código pede ao usuário que digite um número e diz se o número inserido pelo usuário é múltiplo de 2.
Caso o número seja múltiplo de 2, aparece no console a mensagem "Passou no teste.".
Caso o número não seja múltiplo de 2, aparece no console a mentagem "Não passou no teste."

b) para números múltiplos de 2.

c) para números que não são múltiplos de 2.

2.
a) para dar o preço da fruta inserida pelo usuário no prompt.

b) O preço da fruta Maçã é, R$ 2.25

c) O preço da fruta Pêra é, R$ 5

3.
a) solicitando ao usuário que insira um número e convertendo o que foi digitado em uma string number, armazenando na memória como a variável numero.

b) Esse número passou no teste. Nada será impresso no console caso o número inserido seja -10.

c) haverá erro no console pois a variável mensagem não é acessível pelo escopo global.

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
/*
1.
const idade = Number(prompt('Qual a sua idade?'))

function podeDirigir (numero) {
    if (numero>=18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }
}

podeDirigir(idade) */

/* 
2.
function turnoDeEstudo () {
    let turno = prompt('Em qual turno você estuda? (M para matutino, V para vespertino ou N para noturno.').toUpperCase()
    if (turno === "M") {
        console.log('Bom Dia!')
    } else if (turno === "V") {
        console.log('Boa Tarde!')
    } else if (turno === "N") {
        console.log('Boa Noite!')
    }
}
turnoDeEstudo() */

/* 
3.
function turnoDeEstudo () {
    let turno = prompt('Em qual turno você estuda? (M para matutino, V para vespertino ou N para noturno.').toUpperCase()
    switch (turno) {
        case 'M':
            console.log("Bom Dia!")
            break
        case 'V':
            console.log('Boa Tarde!')
            break
        case 'N':
            console.log('Boa Noite!')
            break
        default:
            console.log('Turno inserido inválido')
            break
    }
}
turnoDeEstudo() */

/* 
4.
qualFilmeVer = () => {
    const genero = prompt('Qual o genero do filme?').toLowerCase()
    const preco = prompt('Qual o preço do ingresso?')
    if (genero === 'fantasia' && preco < 15) {
        console.log('Bom filme!')
    }
    else {
        console.log('Escolha outro filme :(')
    }
}
qualFilmeVer() */

/* 
Desafio 1.
qualFilmeVer = () => {
    const genero = prompt('Qual o genero do filme?').toLowerCase()
    const preco = prompt('Qual o preço do ingresso?')
    const qualLanche = prompt('Qual lanchinho vai devorar?')
    if (genero === 'fantasia' && preco < 15) {
        console.log(`Bom filme! Aproveite seu(ua) ${qualLanche}!`)
    }
    else {
        console.log('Escolha outro filme :(')
    }
}
qualFilmeVer() */


