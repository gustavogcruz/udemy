//carregou a função SOMA antes do console.log. Ao se usar a forma function declaration
console.log(soma(3,4))

// function declaration - forma tradicional
function soma (x,y) {
    return x + y
}

// function expression
const sub = function (x,y) {
    return x - y
}

// named function expression
const mult = function mult(x,y) {
    return x * y
}