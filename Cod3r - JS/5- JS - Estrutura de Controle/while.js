function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let contador = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log (`Opção escolhida foi ${opcao}.`)
    contador++
}

console.log(`Repetição: ${contador}`)
console.log('Até a próxima')
