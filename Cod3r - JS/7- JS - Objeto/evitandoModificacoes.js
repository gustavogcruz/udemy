// Object.preventExtensions - não adiciona atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto)) // true or false

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal - selar - não adiciona, nem deleta atributos
const pessoa = { nome: 'Ana', idade: 1}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // true or false

pessoa.sobrenome = 'Cruz'
delete pessoa.nome
pessoa.idade = 2
console.log(pessoa)

//Object.freezer - selado + valores constantes

