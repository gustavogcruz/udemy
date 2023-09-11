// Atribuição por referênia - objetos - aponta para o mesmo endereço de memória.

// Atribuição por valor - tipos primitivos - cada elemento tem seu valor.

let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto)
console.log(produto.preco)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

//delete produto.preco
//console.log(produto)

produto.preco =null //sem preço
console.log(!!produto.preco)
console.log(produto)




