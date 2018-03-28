'use strict';

;(function () {
  var btnAjuda = document.querySelector('#btnAjuda');

  btnAjuda.classList.remove('no-js');

  btnAjuda.addEventListener('click', function () {
    var conteudoCartoes = ['Para exluir clique na lixeira', 'A cor vermelha significa importante'];

    conteudoCartoes.forEach(function (conteudo, index) {
      window.ceep.adicionaCartao(conteudo);
    });
  });
})();