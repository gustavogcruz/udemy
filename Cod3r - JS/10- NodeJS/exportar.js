console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports) // somente o module.exports é retornado

exports = {
    nome: 'Théo'
}

console.log(module.exports)

module.exports = {
    publico: true} // sempre usar o module.exports

console.log(module.exports)
