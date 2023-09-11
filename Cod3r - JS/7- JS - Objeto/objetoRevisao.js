// coleção dinâmica de chave/valor

const produto = new Object

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)


const carro = { 
    modelo: 'A4',
    valor: 89000,

    proprietario: {
        nome: 'Theo',
        idade: 3,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },

    condutores: [{
        nome: 'Theo',
        idade: 3},
                {
        nome: 'Ana',
        idade: 2 }],

    calcularValorSeguro: () => {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Avenida Boi da Cara Preta'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)