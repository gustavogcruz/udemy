// Feito 
// Resposta - let resultados = [] - para retornar um vetor

const formulaBhaskara = (ax2, bx, c) => {
    let resultados = []
    let delta,x1,x2 = 0 
    delta = (bx**2) - (4*ax2*c)   

    if (delta < 0 )
    {
        return (`Delta Negativo: ${delta}\n`)
    } 
    else 
    {
        x1 = (-bx+Math.sqrt(delta)) / (2*ax2)
        x2 = (-bx-Math.sqrt(delta)) / (2*ax2)

        resultados.push(x1)
        resultados.push(x2)
        
        return resultados
        //console.log(`Delta: ${delta} | X1: ${x1} | X2: ${x2}\n`)
    }
}

console.log(formulaBhaskara(4, -4, -24))
console.log(formulaBhaskara(4, 4, 1))
console.log(formulaBhaskara(3, -5, 12))

