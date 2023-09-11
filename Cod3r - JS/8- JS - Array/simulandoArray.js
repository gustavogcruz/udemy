const quaseArray = {0: 'Theo', 1: 'Ana', 2: 'Otto' }

console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Theo', 'Ana', 'Otto']
console.log(quaseArray.toString(), meuArray)