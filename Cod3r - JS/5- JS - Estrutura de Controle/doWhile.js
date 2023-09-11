function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao //somente iniciada a variável, sem valor inicial!
//let opcao = -1
let contador = 0

 do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log (`Opção escolhida foi ${opcao}.`)
    contador++
} while (opcao != -1)

console.log(`Repetição: ${contador}`)
console.log('Até a próxima')
