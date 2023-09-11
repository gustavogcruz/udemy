// factory simples - retorna um objeto

function criarProduto(nome, preco) {
   
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Caneta', 1.00))
console.log(criarProduto('Lápis', 0.75))