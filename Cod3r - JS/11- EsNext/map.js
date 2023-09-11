// não aceita chave repetida

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // não funciona a partir do map
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123) // remove a chave informada
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // retorna o tamanho

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // repete a mesma chave, mantem o último valor inserido
console.log(chavesVariadas)
