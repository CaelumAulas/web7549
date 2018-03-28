'use strict';

;(function () {
  var button = document.querySelector('#btnMudaLayout');
  var mural = document.querySelector('.mural');

  button.classList.remove('no-js');

  btnMudaLayout.addEventListener('click', function () {
    if (mural.classList.contains('mural--linha')) {
      btnMudaLayout.textContent = 'Linhas';
    } else {
      btnMudaLayout.textContent = 'Blocos';
    }

    mural.classList.toggle('mural--linha');
  });
})();