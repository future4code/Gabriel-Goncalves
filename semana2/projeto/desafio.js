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

       if(cartaJogador1 && cartaJogador2 === 'A') {
          let cartaJogador1 = comprarCarta()
          let cartaJogador2 = comprarCarta()
          
          const pontuacaoJogador = cartaJogador1.valor + cartaJogador2.valor
          const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor
          
         //  console.log(`Carta1: ${cartaJogador1.texto} - carta 2: ${cartaJogador2.texto} - Total: ${pontuacaoJogador}`)
         //  console.log(`Carta1: ${cartaComputador1.texto} - carta2: ${cartaComputador2.texto} - Total: ${pontuacaoComputador}`)

         if(confirm(`Suas cartas são: ${cartaJogador1.texto} e ${cartaJogador2.texto}. Uma carta do computador é ${cartaComputador1.texto}`,
         'Deseja comprar mais uma carta?')) { 
            let cartaJogador3 = comprarCarta()
            pontuacaoJogador += cartaJogador3.valor
           //  console.log(pontuacaoJogador)
           if(pontuacaoJogador > 21) {
              alert(`1Fim do jogo! O computador venceu!
              Suas cartas são ${cartaJogador1.texto} ${cartaJogador2.texto} ${cartaJogador3.texto} sua pontuação é ${pontuacaoJogador}. As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto}.`)
           } else if (pontuacaoJogador > pontuacaoComputador) {
              alert(`1Você venceu!
              Sua pontuação é ${pontuacaoJogador} e a pontuação do computador é ${pontuacaoComputador}.`)
           } else if (pontuacaoJogador < pontuacaoComputador) {
              alert(`1O computador venceu!
              Sua pontuação é ${pontuacaoJogador} e a pontuação do computador é ${pontuacaoComputador}.`)
           }
          }
       }
       if(cartaComputador1 && cartaComputador2 ==='A') {
          let cartaComputador1 = comprarCarta()
          let cartaComputador2 = comprarCarta()
          
          const pontuacaoJogador = cartaJogador1.valor + cartaJogador2.valor
          const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor
          
         //  
         
         if(confirm(`Suas cartas são: ${cartaJogador1.texto} e ${cartaJogador2.texto}. Uma carta do computador é ${cartaComputador1.texto}`,
    'Deseja comprar mais uma carta?')) { 
       let cartaJogador3 = comprarCarta()
       pontuacaoJogador += cartaJogador3.valor
      //  console.log(pontuacaoJogador)
      if(pontuacaoJogador > 21) {
         alert(`2Fim do jogo! O computador venceu!
         Suas cartas são ${cartaJogador1.texto} ${cartaJogador2.texto} ${cartaJogador3.texto} sua pontuação é ${pontuacaoJogador}.`
         `As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto}.`)
      } else if (pontuacaoJogador > pontuacaoComputador) {
         alert(`2Você venceu!
         Sua pontuação é ${pontuacaoJogador} e a pontuação do computador é ${pontuacaoComputador}.`)
      } else if (pontuacaoJogador < pontuacaoComputador) {
         alert(`2O computador venceu!
         Sua pontuação é ${pontuacaoJogador} e a pontuação do computador é ${pontuacaoComputador}.`)
      }
      }
       }
    
    let pontuacaoJogador = cartaJogador1.valor + cartaJogador2.valor
    let pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor
    let suasCartasSão = `Suas cartas são: ${cartaJogador1.texto} ${cartaJogador2.texto}.`
    let cartaDoComputadore = ` Uma carta do computador é ${cartaComputador1.texto}.`
    let querComprarMais =  ` Deseja comprar mais uma carta?`   

    while(confirm(suasCartasSão + cartaDoComputadore + querComprarMais)) { 
       let cartaJogadori = comprarCarta()
       suasCartasSão += cartaJogadori.texto
       pontuacaoJogador += cartaJogadori.valor
      //   console.log(pontuacaoJogador)
      if(pontuacaoJogador > 21) {
         alert(`3Fim do jogo! O computador venceu!`) 
         console.log(`Suas cartas são ${suasCartasSão} e sua pontuação é ${pontuacaoJogador}.`)
         console.log(`As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto}.`)
      } else if (pontuacaoJogador > pontuacaoComputador) {
         alert(`3Você venceu!`)
         console.log(`Sua pontuação é ${pontuacaoJogador}.`)
         console.log(`A pontuação do computador é ${pontuacaoComputador}.`)
      } else if (pontuacaoJogador < pontuacaoComputador) {
         alert(`3O computador venceu!`)
         console.log(`Sua pontuação é ${pontuacaoJogador}.`)
         console.log(`A pontuação do computador é ${pontuacaoComputador}.`)
      }
    }
    
      //  if(pontuacaoJogador > pontuacaoComputador) {
      //     alert(`0Você venceu!
      //     Você pontuou ${pontuacaoJogador} e o computador pontuou ${pontuacaoComputador}`)
      //  } else if (pontuacaoJogador < pontuacaoComputador) {
      //     alert(`0O computador venceu!
      //     Você pontuou ${pontuacaoJogador} e o computador pontuou ${pontuacaoComputador}`)
      //  } else {
      //     alert(`0Empate!
      //     Você pontuou ${pontuacaoJogador} e o computador pontuou ${pontuacaoComputador}`)
      //  }
    
    } else  {
       alert('Sem jogo :(')
     }
