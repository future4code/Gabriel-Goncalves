//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*
1.
Um loop que altera o valor da variável "valor" pelo valor da variável "i".
10 será impresso no console */

/*
2.
a) 19, 21, 23, 25, 27, 29, 30.

b) Sim. Poderia ser usado o comando lista.indexOf(array[i]). */

/*
3.
**** */

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
/* function quantosBichinhos () {
    let bichinhos = Number(prompt('Quantos bichinhos de estimação você tem?'))
    if(bichinhos === 0) {
        console.log('Que pena!Você pode adotar um pet!')
    } else if (bichinhos > 0) {
        const listaNomesBichinhos = []
        for(let i = 1; i <= bichinhos; i++) {
            const nomesBichinhos = prompt('Digite o nome de um dos seus pets')
            listaNomesBichinhos.push(nomesBichinhos)
        }
        console.log(listaNomesBichinhos)
    }
}
quantosBichinhos() */


// 2.
// a)
const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/* function imprimeValores (array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
imprimeValores(arrayOriginal) */

/* 
b)
function imprimeValoresDivididos (array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]/10)
    }
}
imprimeValoresDivididos(arrayOriginal) */

/* 
c)
function criaArrayComPares (array) {
    const arrayDePares =[]
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            arrayDePares.push(array[i])
        }
    }
    console.log(arrayDePares)
}
criaArrayComPares(arrayOriginal) */

/* 
d)
function criaArrayDeStrings (array) {
    const arrayDeStrings = []
    for(let i = 0; i < array.length; i++) {
        arrayDeStrings.push(`O elemento do índex ${i} é ${array[i]}`)
    }
    console.log(arrayDeStrings)
}
criaArrayDeStrings(arrayOriginal) */

/* 
e)
function imprimeMaiorEMenor (array) {
    let maior = 0
    let menor = 2000
    for(let i = 0; i < array.length; i++) {
        if(array[i] > maior) {
            maior = array[i]
        }
    }
    for(let i = 0; i < array.length; i++) {
        if(array[i] < menor) {
            menor = array[i]
        }
    }
    console.log(maior)
    console.log(menor)
}
imprimeMaiorEMenor(arrayOriginal) */
