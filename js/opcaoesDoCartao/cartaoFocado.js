const cartoes = document.querySelectorAll('.cartao')

for(let index = 0; index < cartoes.length; index++) {
  cartoes[index].addEventListener('focusin', function() {
    this.classList.add('cartao--focado')
  })

  cartoes[index].addEventListener('focusout', function() {
    this.classList.remove('cartao--focado')
  })
}