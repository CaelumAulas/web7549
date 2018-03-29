;(function(doc) {
  const $telefone = doc.querySelector('#telefone')

  $telefone.addEventListener('input', (event) => {
    
    $telefone.value = $telefone.value.replace(/[]/, '')
    $telefone.value = $telefone.value.replace(/^(\d{2})$/, '($1) ')
    $telefone.value = $telefone.value.replace(/^(\(\d{2}\) \d{5})$/, '$1-')
    
    if ($telefone.value.length == 15) {
      $telefone.value = $telefone.value.replace(/-\d{4}$/, '$1')
    }
  })
})(document)