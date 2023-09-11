// função sem retorno
function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(5,7)
imprimirSoma(7)
imprimirSoma(7,3,4,5)
imprimirSoma()

// Função com retorno
function soma (a,b =0 ) {
    return a + b
}

console.log(soma(1,4))
console.log(soma(4))
console.log(soma())
