// funções associadas a object

const pessoa = {
    nome: 'Théo',
    idade: 3,
    peso: 17
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries (pessoa))

Object.entries(pessoa).forEach(e => {
       console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor])=> {
       console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // aceita ou não visibilidade em Keys
    writable: true, //aceita ou não sobreescrita
    value: '12/01/2020'
})

pessoa.dataNascimento = '08/07/1982'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)

