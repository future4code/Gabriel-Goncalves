/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Boas vindas ao jogo de Blackjack!')
    


if(confirm ('Quer começar uma rodada?')) {
   let cartaJogador1 = comprarCarta()
   let cartaJogador2 = comprarCarta()
   let cartaComputador1 = comprarCarta()
   let cartaComputador2 = comprarCarta()

const pontuacaoJogador = cartaJogador1.valor + cartaJogador2.valor
const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor

console.log(`Carta1: ${cartaJogador1.texto} - carta 2: ${cartaJogador2.texto} - Total: ${pontuacaoJogador}`)
console.log(`Carta1: ${cartaComputador1.texto} - carta2: ${cartaComputador2.texto} - Total: ${pontuacaoComputador}`)

   if(pontuacaoJogador > pontuacaoComputador) {
      console.log('Você venceu!')
   } else if (pontuacaoJogador < pontuacaoComputador) {
      console.log('O computador venceu!')
   } else {
      console.log('Empate!')
   }

} else  {
   console.log('Sem jogo :(')
}