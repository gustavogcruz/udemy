const imprimirResultado = function(nota) {

    if( nota > 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(6)
imprimirResultado(7.1)
imprimirResultado('Epa!') //cuidado