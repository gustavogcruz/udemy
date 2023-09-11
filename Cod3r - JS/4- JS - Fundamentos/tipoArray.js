const valores = [6,7,8,9]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

console.log(valores.length)

valores.push({id: 3}, false, null, 'Ana') // insere valores no array
console.log(valores)
console.log(valores.length)

console.log(valores.pop()) //retira e retorna o último elemento do array
delete valores[1] // retira o valor e deixa vazio
console.log(valores)

console.log(typeof valores)

