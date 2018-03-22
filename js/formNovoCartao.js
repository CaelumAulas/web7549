;(function(){
    const formNovoCartao = document.querySelector(".formNovoCartao")

    formNovoCartao.addEventListener("submit", function(event){
        event.preventDefault()

        const campoDeTexto = formNovoCartao.querySelector(".formNovoCartao-conteudo")
        
        const conteudo = campoDeTexto.value

        if(!conteudo){
            // Criar a msg de erro
            // <p class="formNovoCartao-msg">Deu ruim</p>
            
            const tag = document.createElement("p")
            tag.classList.add("formNovoCartao-msg")
            tag.textContent = "Deu ruim"

            formNovoCartao.insertBefore(tag, formNovoCartao.children[1])
            tag.addEventListener("animationend", function(){
                tag.remove()
            })
        
        }
        
    })

    formNovoCartao.classList.remove("no-js")
})()