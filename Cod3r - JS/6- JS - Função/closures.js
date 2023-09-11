// Closures - é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveus externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
