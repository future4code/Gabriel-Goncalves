// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui {
    console.log(altura * largura)
}

calculaAreaRetangulo(3, 5)


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Em que ano estamos?'))
  let anoDeNascimento = Number(prompt('Em que ano nasceu?'))
  console.log(anoAtual - anoDeNascimento)
}

imprimeIdade()


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

console.log(calculaIMC(96, 1.86))


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt('Qual o seu nome?')
  let idade = prompt('Qual a sua idade?')
  let email = prompt('Qual o seu e-mail?')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e meu email é ${email}`)
}

imprimeInformacoesUsuario()


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt('Digite uma cor favorita')
  let cor2 = prompt('Digite uma segunda cor favorita')
  let cor3 = prompt('Digite uma terceira cor favorita')
  console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas()


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

retornaStringEmMaiuscula('yippie ki yay')


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

calculaIngressosEspetaculo(40000, 100)


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

console.log(checaStringsMesmoTamanho('Abacaxi de Marataízes', 'é doce, parece que tem mel'))


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

retornaPrimeiroElemento(['batata', 'potato', 'batatovsky'])


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

retornaUltimoElemento([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()
}

console.log(checaIgualdadeDesconsiderandoCase('eu sou a lenda', 'eu sou a legenda'))


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}