// pessoa => 123 -> {...}
const pessoa = {
    nome: 'João'
}

pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 345 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // congela o objeto evitando alteração

pessoa.nome = 'Maria'
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Otto'})
console.log(pessoaConstante)
pessoaConstante.nome = 'Theo'
console.log(pessoaConstante)