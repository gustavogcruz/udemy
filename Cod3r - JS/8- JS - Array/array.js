// Array JS - Base Zero - 0,1,2,3

//console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Theo', 'Otto', 'Ana')
console.log(aprovados)

aprovados = ['Theo', 'Otto', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // retorna undefined. Além do limite do Array

aprovados[3] = 'Ster'
aprovados.push('Ligia') // insere na última posição
console.log(aprovados)
console.log(aprovados.length) // tamanho a partir de 1.

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

aprovados.sort() // ordenação
console.log(aprovados)

delete aprovados[0]
console.log(aprovados[0])

aprovados = ['Theo', 'Otto', 'Ana']
aprovados.splice(1, 1, 'Ster') // remove, insere elementos
console.log(aprovados)