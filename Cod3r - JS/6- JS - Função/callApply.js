function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1

console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 49990, 
    desc: 0.20,
getPreco}
 
console.log(1,carro.getPreco())

console.log(2, getPreco.call(carro))
console.log(3, getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(globalThis, [0, '$']))