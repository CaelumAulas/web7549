"use strict";

;(function () {
    var formNovoCartao = document.querySelector(".formNovoCartao");
    var numeroDoCartao = 0;

    formNovoCartao.addEventListener("submit", function (event) {
        event.preventDefault();

        var campoDeTexto = formNovoCartao.querySelector(".formNovoCartao-conteudo");

        var conteudo = campoDeTexto.value;

        if (!conteudo) {
            // Criar a msg de erro
            // <p class="formNovoCartao-msg">Deu ruim</p>

            var tag = document.createElement("p");
            tag.classList.add("formNovoCartao-msg");
            tag.textContent = "Deu ruim";

            formNovoCartao.insertBefore(tag, formNovoCartao.children[1]);
            tag.addEventListener("animationend", function () {
                tag.remove();
            });
        } else {
            window.ceep.adicionaCartao(conteudo);
        }
    });

    formNovoCartao.classList.remove("no-js");
})();