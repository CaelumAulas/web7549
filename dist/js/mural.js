'use strict';

;(function () {
    var numeroDoCartao = 0;

    window.ceep = {};

    window.ceep.adicionaCartao = function (conteudo) {
        var mural = document.querySelector('.mural');

        var templateCartao = ' \n        <article id="cartao_' + numeroDoCartao + '" tabindex="0" class="cartao">\n            <div class="opcoesDoCartao">\n            <button id="remove_2" class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">\n                <svg><use xlink:href="#iconeRemover"></use></svg>\n            </button>\n\n            <input type="radio" name="corDoCartao2" value="#EBEF40" id="corPadr\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo" checked>\n            <label for="corPadr\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">\n                Padr\xE3o\n            </label>\n\n            <input type="radio" name="corDoCartao2" value="#F05450" id="corImportante-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo">\n            <label for="corImportante-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">\n                Importante\n            </label>\n\n            <input type="radio" name="corDoCartao2" value="#92C4EC" id="corTarefa-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo">\n            <label for="corTarefa-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">\n                Tarefa\n            </label>\n\n            <input type="radio" name="corDoCartao2" value="#76EF40" id="corInspira\xE7\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo">\n            <label for="corInspira\xE7\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">\n                Inspira\xE7\xE3o\n            </label>\n            </div>\n            <p class="cartao-conteudo" contenteditable tabindex="0">' + conteudo + '</p>\n        </article>';

        var cartao = $(templateCartao);

        cartao.on('click', function (event) {
            var btn = $(event.target);

            if (btn.hasClass("opcoesDoCartao-remove")) {
                cartao.on('transitionend', function (event) {

                    if (event.originalEvent.propertyName == 'opacity') {
                        cartao.remove();
                    }
                });
                cartao.addClass('cartao--some');
            }
        });

        cartao.on("change", function (event) {
            var btnColor = $(event.target);

            if (btnColor.hasClass("opcoesDoCartao-radioTipo")) {
                cartao.css('background-color', btnColor.val());
                console.log(cartao);
            }
        });

        $('.mural').append(cartao);

        console.log(numeroDoCartao);

        numeroDoCartao++;
    };
})();