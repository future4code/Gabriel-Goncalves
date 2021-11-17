const entrada1 = process.argv[2]
const entrada2 = Number(process.argv[3])
const entrada3 = Number(process.argv[4])

function operaNumeros (operacao, numero1, numero2) {
    switch (operacao) {
        case "add":
            console.log(numero1 + numero2)
            break

        case "sub":
            console.log(numero1 - numero2)
            break

        case "mult":
            console.log(numero1 * numero2)
            break

        case "div":
            console.log(numero1 / numero2)
            break

        default:
            console.log('ERRO! Operação inválida.')
    }
}

operaNumeros(entrada1, entrada2, entrada3)