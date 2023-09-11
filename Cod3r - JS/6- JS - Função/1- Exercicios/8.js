//Feito

pontuacao = [10, 20, 20, 8, 25, 3, 0, 30, 1]

const verificaPontuacao = (pontuacao) => {

    let melhor = pontuacao[0] // inicializado com o indice ZERO.
    let pior = pontuacao[0] // inicializado com o indice ZERO.
    let contaMelhor = 0
    let posicaoPiorJogo = 0
 
    for(let i in pontuacao) {        
           
        if (pontuacao[i] > melhor) 
        {
            melhor = pontuacao[i]
            contaMelhor++            
        }
        else if (pontuacao[i] <= pior)
        {  
            pior = pontuacao[i]
            posicaoPiorJogo = ++i        
        }         
    }
    console.log(`Recordes: ${contaMelhor} 
Número Pior Jogo: ${posicaoPiorJogo}`)            
   
}
    
verificaPontuacao(pontuacao)


// Resposta

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {

    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))