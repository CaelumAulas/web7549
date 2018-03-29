// https://viacep.com.br/ws/03236000/json/
;(function(doc) {
  const $cep = doc.querySelector('#cep') //prefixo $ para variavel que guarda um elemento da página
  const $form = doc.querySelector('#formCep')
  const $endereco = doc.querySelector('#endereco')
  

  $form.addEventListener('submit', (event) => {
    event.preventDefault()

    const url = `https://viacep.com.br/ws/${$cep.value}/json/`

    $.ajax({
      method: 'GET',
      url: url
    }).done(function(cep) {
      const template = `
        <label>Rua:
          <input type="text" value="${cep.logradouro}">
        </label>
        <label>Cidade:
          <input type="text" value="${cep.localidade}">
        </label>
        <label>Estado:
          <input type="text" value="${cep.uf}">
        </label>
        <label>Bairro:
          <input type="text" value="${cep.bairro}">
        </label>
      `

      const $fieldset = doc.createElement('fieldset')

      $fieldset.innerHTML = template

      $form.insertBefore($fieldset, null)
    })
  })
})(document)

function init(doc) {
  doc.querySelector
}

init(document)