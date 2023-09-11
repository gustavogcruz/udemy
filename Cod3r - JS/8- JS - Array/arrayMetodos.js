const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // massa quebrou o carro! Remove o último elemento.

console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove elemento da primeira posição.
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//adicionar
pilotos.splice(2,0, 'Botas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) // massa quebrou novamente :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array gerado a partir do index 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // novo array gerado index 1 até 3. 4 não entra
console.log(algunsPilotos2)

