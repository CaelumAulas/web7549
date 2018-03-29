const nomes = [
  'Victor',
  'Vitor',
  'Tatiana',
  'Tatiana',
  'Tatiana',
  'Tatiana',
  'Tatiana',
  'Tatiana',
  'Tatiana'
]

// nomes.forEach((nome) => {
//   if (nome == 'Tatiana') {
//     console.log('Nome:', nome)
//   }
// })

// const tatiana = []
const novoNome = nomes.filter((nome) => {
  if (nome == 'Vitor' || nome == 'Victor') {
    return nome
  }
})

console.log(novoNome)










