const entrada1 = process.argv[2]
const entrada2 = process.argv[3]

function Cumprimenta (nome, idade) {
    nome = entrada1
    idade = entrada2
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${Number(idade) + 7}`)
}

Cumprimenta(entrada1, entrada2)