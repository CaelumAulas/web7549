const nomes = [
  'Dal',
  'Jú',
  'Igor',
  'Henrique',
  'Tatiana',
  'Victor',
  'Thais',
  'Leandro',
  'Vitor',
  'Denis',
  'Isadora'
]

const curso = 'WD-47'
// const nomesCursos = []

// nomes.forEach((nomeParametro) => {
//   const nomeCurso = {
//     nome: nomeParametro,
//     cursos: [curso]
//   }

//   nomesCursos.push(nomeCurso)
// })

const nomesCursos = nomes.map((nomeParametro) => {
  const  nomeCurso = {
    nome: nomeParametro,
    cursos: [curso]
  }

  return nomeCurso
})


console.log(nomesCursos)

// const nomesTratamento = nomes.map(nome => 'Sr./Sra. ' + nome )

// nomesTratamento.forEach(nome => console.log(nome))

nom.map(n => 'Sr./Sra. ' + n ).forEach(n => n == 'Sr./Sra. Igor' ? console.log(n) : console.log('outros alunos'))

nomes.map(nome => 'Sr./Sra. ' + nome ).concat(['oi']).forEach(nome => console.log(nome))




























