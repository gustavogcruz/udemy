function soBoaNoticia (nota) {
    if(nota > 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(7.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo (valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

// não retorna, pois é uma condição falsa
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)

// Verdadeiro
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})


