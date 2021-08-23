// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}
//-------------------------------------------------DESAFIO ---------------------------------------------------------
/* function retornaArrayInvertido(array) {
  let arrayInvertida = []
  for(let i = array.length - 1; i >= 0; i = i -1) {
  arrayInvertida.push(array[i])
  }
  return arrayInvertida
} */
//-------------------------------------------------DESAFIO ---------------------------------------------------------

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayDePares = []
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      arrayDePares.push(array[i])
    }
  }
  return arrayDePares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arrayDeParesElevadosADois = []
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      arrayDeParesElevadosADois.push(array[i]**2)
    }
  }
  return arrayDeParesElevadosADois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let objeto = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: 0,
    diferenca: 0,
  }
  if(num1 > num2) {
    objeto.maiorNumero = num1
    objeto.maiorDivisivelPorMenor = (num1 % num2 === 0)
    objeto.diferenca = num1 - num2
  } else if (num2 > num1) {
    objeto.maiorNumero = num2
    objeto.maiorDivisivelPorMenor = (num2 % num1 === 0)
    objeto.diferenca = num2 - num1
  }
  return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let nPrimeirosPares = []
  for(let i = 0; nPrimeirosPares.length < n; i++) {
    if(i % 2 === 0) {
      nPrimeirosPares.push(i)
    }
  }
  return nPrimeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let tipoDoTriangulo = ""
  if(ladoA === ladoB && ladoA === ladoC) {
    tipoDoTriangulo += "Equilátero"
  } else if (ladoA === ladoB && ladoA !== ladoC || ladoB === ladoC && ladoB !== ladoA || ladoC === ladoA && ladoC !== ladoB) {
    tipoDoTriangulo += "Isósceles"
  } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
    tipoDoTriangulo += "Escaleno"
  }
  return tipoDoTriangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let chamada = ""
  chamada += `Venha assistir ao file ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado ${filme.atores}`
  return chamada
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {...pessoa, nome:'ANÔNIMO'}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}