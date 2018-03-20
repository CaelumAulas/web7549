const btnMudaLayout = document.querySelector('#btnMudaLayout')
const mural = document.querySelector('.mural')

btnMudaLayout.addEventListener('click', () => {
  if (mural.classList.contains('mural--linha')) {
    btnMudaLayout.textContent = 'Linhas'
  } else {
    btnMudaLayout.textContent = 'Blocos'
  }

  mural.classList.toggle('mural--linha')
})

// btnMudaLayout.addEventListener('click', function() {
//   if (this.textContent.trim() === 'Linhas') {
//     this.textContent = 'Blocos'
//   } else {
//     this.textContent = 'Linhas'
//   }
// })