// ES8: Object.values / Object.entries

const obj = {a:1, b:2, c:3}

console.log(Object.keys(obj)) // chave

console.log(Object.values(obj)) //valor

console.log(Object.entries(obj)) //chave-valor

//Melhorias na Notação Literal
const nome = 'Theo disse:\n'
const pessoa = {
    nome,
    ola() {
      return 'Oi Gente, cheguei!\n'  
    },
    bye: function() {
        return 'Até Mais!'
    }
}
console.log(pessoa.nome, pessoa.ola(), pessoa.bye())

//Class
class Animal {}
class Cachorro extends Animal{
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())