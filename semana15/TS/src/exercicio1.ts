// const minhaString: string = 2 ------ ERRO

// const meuNumero: number = "olá mundo!" ------ ERRO

// const pessoa: {nome: string, idade: number, corFavorita: string} = {
//     nome: "Doricleide",
//     idade: 33,
//     corFavorita: "Azul celeste"
// }

enum Cores {
    VERMELHO = "Vermelho",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}

const pessoa1: Pessoa = {
    nome: "Nelson",
    idade: 28,
    corFavorita: Cores.ANIL
}

const pessoa2: Pessoa = {
    nome: "Tadeu",
    idade: 23,
    corFavorita: Cores.VERDE
}

const pessoa3: Pessoa = {
    nome: "Simas",
    idade: 30,
    corFavorita: Cores.LARANJA
}