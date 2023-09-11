const valor = 'Global'

function minhaFuncao() {
    //const valor = 'local'
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFuncao()
}

exec() // vai exibir 'Global' pelo contexto onde a função foi declarada