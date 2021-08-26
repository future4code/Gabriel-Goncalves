```function calculaNota(ex, p1, p2) {
let notaFinal = ((ex*1) + (p1*2) + (p2*3))/(1+2+3)
let conceito = ""
if(notaFinal > 9) {
  conceito+="A"
} else if (notaFinal < 9 && notaFinal > 7.5) {
  conceito+="B"
} else if (notaFinal < 7.5 && notaFinal > 6) {
  conceito+="C"
} else if (notaFinal < 6) {
  conceito+="D"
}
return conceito
}```