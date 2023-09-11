// parâmetros e retorno são opcionais

function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area} m2`)
    } else {
        return area
    }
}

console.log(area(4,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,4,5,6)) // utiliza os dois primeiros passados
console.log(area(4,6))