Array.prototype.forEach2 = function (callback) {
    for (let i =0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Gustavo', 'Luciana', 'Ana', 'Theo']

aprovados.forEach2((aprovado, indice) => {
    console.log(`${indice + 1}) ${aprovado}`)
})

