;(function() {
  const btnAjuda = document.querySelector('#btnAjuda')

  btnAjuda.classList.remove('no-js')

  btnAjuda.addEventListener('click', () => {
    const conteudoCartoes = ['Para exluir clique na lixeira', 'A cor vermelha significa importante']

    conteudoCartoes.forEach((conteudo, index) => {
      window.ceep.adicionaCartao(conteudo)
    })
  })
})()