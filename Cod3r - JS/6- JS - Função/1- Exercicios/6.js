//Feito

const calculaJurosSimples = (capital, juros, tempo) => {
    return capital + (capital * ((juros/100) * tempo))  
     
}

const calculaJurosComposto = (capital, juros, tempo) => {
    let montante = 0
    montante = capital * ((1 + (juros/100))**tempo)
    return montante.toFixed(2)

}


console.log(calculaJurosSimples(2000, 4, 12))
console.log(calculaJurosComposto(100, 10, 2))
