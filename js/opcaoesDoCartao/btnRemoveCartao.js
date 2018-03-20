var lixeiras = document.querySelectorAll('.opcoesDoCartao-remove')
var cartoes = document.querySelectorAll('.cartao')

for(var index = 0; index < lixeiras.length; index = index + 1) {
  lixeiras[index].addEventListener('click', function() {
    this.parentNode.parentNode.remove()
  })
}

