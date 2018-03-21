;(function() {
  const button = document.querySelectorAll('.opcoesDoCartao-remove')

  for(var index = 0; index < button.length; index = index + 1) {
    button[index].addEventListener('click', function() {
      const cartao = this.parentNode.parentNode

      cartao.addEventListener('transitionend', (event) => {
        if (event.propertyName == 'opacity') {
          cartao.remove()
        }
      })
      
      cartao.classList.add('cartao--some')
    })
  }
})()