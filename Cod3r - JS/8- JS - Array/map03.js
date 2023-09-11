Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços


// transforma o array em objeto e retorno o preço
const paraObjeto = json => JSON.parse(json)
const resultadoParcial = carrinho.map(paraObjeto)
console.log(resultadoParcial
    )
const apenasPreco = produto => produto.preco

const resultadoFinal = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultadoFinal)