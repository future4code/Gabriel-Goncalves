//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/*1. bool1 && bool2 = falso
bool1 && boll2 && bool3 = falso
!resultado && (bool1 || bool2) = verdadeiro
console.log('d. ', typeof resultado) = string*/
//Após executar o programa, percebi que o resultado da última linha é boolean

/*2. Os números não são somados pois o prompt retorna valores em texto.
Será impresso no console uma junção de textos na qual os números inseridos
estarão um ao lado do outro.*/

/*3. Deve-se converter os valores de prompt para números
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))*/

//EXERCÍDIOS DE ESCRITA DE CÓDIGO

/*1. 
let suaIdade = Number(prompt('Digite sua idade?'))
let idadeDeOutro = Number(prompt('Digite a idade de seu(ua) melhor amigo(a)'))
console.log('É mais velho que seu(ua) amigo(a)?', suaIdade > idadeDeOutro)
console.log('Diferença de idade entre vocês', suaIdade - idadeDeOutro)*/

/*2. 
let par = Number(prompt('Insira um número par'))
console.log('Resto', par % 2)*/
//O resto da divisão será sempre 0 quando for inserido um número par.
//Caso seja inserido um número ímpar, o programa será executado normalmente
//,contudo, o valor impresso no console será sempre diferente de 0.

/*3. 
let anos = Number(prompt('Quantos anos você tem?'))
console.log('Meses', anos * 12)
console.log('Dias', anos * 12 * 30)
console.log('Horas', anos * 12 * 30 * 24)*/

/*4. 
let primeiro = Number(prompt('Digite um número'))
let segundo = Number(prompt('Digite mais um número'))
console.log('Primeiro é maior?', primeiro > segundo)
console.log('É igual', primeiro == segundo)
console.log('Primeiro é divisível pelo segundo?', (primeiro % segundo) == 0)
console.log('Segundo é divisível pelo primeiro?', (segundo % primeiro) == 0)*/