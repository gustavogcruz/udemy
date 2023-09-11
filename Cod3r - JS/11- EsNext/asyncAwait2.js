function gerarNumerosEntre (min, max, numeroRepetidos) {
    
    if (min > max) {
       [max, min] = [min, max] // destructuring = array        
    }

    return new Promise( (resolve, reject) => {
       const fator = max - min + 1
       const aleatorio = parseInt(Math.random() * fator) + min

       if(numeroRepetidos.includes(aleatorio)){
        reject('Número repetido!')
       } else  {
        resolve(aleatorio)
       }       
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()) {
            // await gerarNumerosEntre(1,60,numeros)
            numeros.push(await gerarNumerosEntre(1,60,numeros))
         }
         return numeros
    } catch(e) {
        if(tentativas > 10) {
        throw "Número repetido no jogo!"
    } else {
        return gerarMegaSena(qtdNumeros, tentativas + 1)
    }
    }
}

gerarMegaSena(6)
.then(console.log)
.catch(console.log)

// gerarNumerosEntre(1, 5, [1,2,4])
// .then(console.log)
// .catch(console.log)
