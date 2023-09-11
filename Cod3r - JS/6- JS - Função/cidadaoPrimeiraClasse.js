// Função em JS é First-Class Object (Citizens)
// High-order function

// criar de forma literal
function func1 (){}

// armazenar em uma variavel
const func2 = function () {}

// Armazenar função em um array
const array = [function (a,b) {return a + b }, func1, func2]
console.log(array[0](3,4))

// Armazer função em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa'}
console.log(obj.falar())

// Passar uma função como parâmetro para outra função
function run (fun) {
    fun()
}

run(function() { console.log('Executando...')})

// Uma função pode retornar / conter uma função
function soma (a,b) {
    return function (c) {
        console.log(a+b+c)
    }
}
soma(2,2) (2)
const quatroMais = soma(2,2)
quatroMais(2)

