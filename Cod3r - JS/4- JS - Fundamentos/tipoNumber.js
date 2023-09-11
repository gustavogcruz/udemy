const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const aval1 = 9.871
const aval2 = 6.871

const total = aval1 * peso1 + aval2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed - limita número de digitos após ponto decimal
console.log(media.toString()) // toString - da forma do exemplo converte media em binário

console.log(typeof media)
console.log(typeof Number)

console.log(7/0) // tipo infinito

console.log('10' / 2) // divisão OK
console.log('10' + 2) // string tem preferência, então irá concatenar
console.log('10' - 2) // subtração OK

console.log('Show' * 2) // NaN

console.log(0.1 + 0.7)

//console.log(10.toString())
console.log((10.345).toFixed(2)) 

// Objeto Math
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area.toFixed(2))
console.log(typeof Math)

// Template Strings

const nome = 'Otto'
const concatenacao = 'Olá, ' + nome + '!'
const temp = `Olá, 
${nome}!` // uso template strings

console.log(concatenacao)
console.log(temp)

//expressoes
console.log(`1 + 1 = ${1+1}`)

const up = s => s.toUpperCase()
s('ana')








