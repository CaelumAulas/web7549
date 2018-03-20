// var lixeira1 = document.querySelector('#remove_1')
// var lixeira2 = document.querySelector('#remove_2')
// var lixeira3 = document.querySelector('#remove_3')
var lixeiras = document.querySelectorAll('.opcoesDoCartao-remove')

// var cartao1 = document.querySelector('#cartao_1')
// var cartao2 = document.querySelector('#cartao_2')
// var cartao3 = document.querySelector('#cartao_3')
var cartoes = document.querySelectorAll('.cartao')

for(var index = 0; index < lixeiras.length; index = index + 1) {
  lixeiras[index].addEventListener('click', function() {
    this.parentNode.parentNode.remove()
  })
}

// lixeira1.addEventListener('click', removeCartao)
// lixeiras[0].addEventListener('click', function () {
//   cartoes[0].remove()
// })

// lixeiras[1].addEventListener('click', function () {
//   cartoes[1].remove()
// })

// lixeiras[2].addEventListener('click', function () {
//   cartoes[2].remove()
// })

// function removeCartao() {
//    cartao1.remove()
// }

