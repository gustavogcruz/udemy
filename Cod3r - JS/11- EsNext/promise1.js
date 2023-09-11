let a = 1
//console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
})
//console.log(typeof p)

p.then(function(valor) {
    console.log(valor)
})

//Objetos
let p1 = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    })
})

p1.then(function(valor) {
    console.log(valor)      
    console.log(valor.x)
    console.log(valor.y)     
})

//Array
let p2 = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Theo', 'Otto'])
})


p2.then(function(valor) {
    console.log(valor)
   
})

// Arrow function
p2
//.then(valor => console.log(valor))
.then(valor => valor[0])
//.then(valor => console.log(valor))
//.then(primeiroElemento => console.log(primeiroElemento))
.then(primeiroElemento => primeiroElemento[0])
//.then(primeiraLetra => console.log(primeiraLetra))
.then(primeiraLetra => primeiraLetra.toLowerCase())
.then(letraMinuscula => console.log('p2',letraMinuscula))



let p3 = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Theo', 'Otto'])
})

//usando função com promise
function primeiroElemento(array) {
    return array[0]
}

const primeiroE = arrayOuString => arrayOuString[0]

function primeiraLetra (string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

p3
//.then(valor => console.log(valor))
.then(primeiroElemento)
//.then(valor => console.log(valor))
//.then(primeiroElemento => console.log(primeiroElemento))
.then(primeiraLetra)
//.then(primeiraLetra => console.log(primeiraLetra))
.then(letraMinuscula)
//.then(primeiraLetra => primeiraLetra.toLowerCase())
.then(console.log)
//.then(letraMinuscula => console.log('p3',letraMinuscula))

//p4 - criando nova promessa sem atribuir
new Promise(resolve => {
    resolve(['Ana', 'Theo', 'Otto'])
})
.then(primeiroE)
.then(primeiroE)
.then(letraMinuscula)
.then(console.log)