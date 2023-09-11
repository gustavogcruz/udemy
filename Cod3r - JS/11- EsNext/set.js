// não aceita repetição / não indexada

const times = new Set()

times.add('Atlético').add('Séria A')
times.add('América').add('Séria A2')
times.add('Cruzeiro').add('Série B')
times.add('Cruzeiro')

console.log(times)
console.log(times.size)
console.log(times.has('Cruzeiro'))
times.delete('Série B')
console.log(times)
console.log(times.size)
console.log(times.has('Série B'))

const nomes = ['Theo', 'Ana', 'Otto', 'Theo']
const nomeSet = new Set(nomes)
console.log(nomeSet)

