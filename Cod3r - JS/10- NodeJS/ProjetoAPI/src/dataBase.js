const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

salvarProduto = produto => {
    if(!produto.id) {
        produto.id = sequence.id
        produtos[produto.id] = produto
    }
    return produto
}

excluirProduto = id => {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

getProduto = id => produtos[id] || {}

getProdutos = _ => Object.values(produtos)

module.exports = {salvarProduto, excluirProduto, getProduto, getProdutos}