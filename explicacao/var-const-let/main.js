var idade = 30

if (idade < 18) {
  console.log('não posso beber')
} else {
  const nome = 'Marco Bruno' // vaza escopo de for, while, if
  nome = 'Adalberto Garcia'
  console.log('bebe aí')
}

function imprimeCoiso() {
  var coiso = 'askdjhkajfhl'
}