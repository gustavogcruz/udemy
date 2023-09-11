const aprovados = ['Gustavo', 'Luciana', 'Ana', 'Theo']

aprovados.forEach((aprovado, indice) => {
    console.log(`${indice + 1}) ${aprovado}`)
})

// somente um parâmetro e uma condição
aprovados.forEach(aprovado => console.log(`- ${aprovado}`))

const exibirAprovados = aprovado => console.log(`* ${aprovado}`)
aprovados.forEach(exibirAprovados)
 