const fabricantes = ['Toyota','Mercedes', 'Audi', 'BMW']

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante) { // função callback
    console.log(fabricante)
})

fabricantes.forEach(fabricante => console.log(fabricante)) // função arrow callback - apenas um parãmetro com um retorno.

