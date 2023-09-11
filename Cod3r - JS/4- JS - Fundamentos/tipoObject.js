//objeto em JS não é o mesmo que JSON

const prod1 = {}
prod1.nome = 'Celular Luciana'
prod1.preco = 2069.00
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
nome: 'Camisa do Galo',
preco: 200.00,
desconto: 0.01,
obj1: {
    teste: 1, // aninhamento de objetos
obj2: {
    teste: 2
}
}
}

console.log(prod2)