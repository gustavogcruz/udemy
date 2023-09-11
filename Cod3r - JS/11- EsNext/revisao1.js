//let e const
{
var a =2 // não possui escopo de bloco
let b = 3 // possui escopo de bloco
}

console.log(a)
//console.log(b) // ReferenceError: b is not defined

//Template String

console.log(`Meu valor é: ${a}`)

const produto = 'Lenovo'
console.log(`${produto} é caro`)

// Destructuring

const [l, e, ...tras] = 'Cod3r'
//l - recebe C
//e - recebe o
//...tras - recebe d3r
console.log(l,e,tras)

const [x, , y] = [1,2,3]
console.log(x,y)

const {idade: i, nome} = {nome:'Theo', idade: 3}
console.log(i, nome)