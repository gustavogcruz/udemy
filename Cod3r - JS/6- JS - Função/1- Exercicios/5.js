//Resposta - .toString().replace(".", ",")}`

let valor = 0
const retornaValorReal = (valor) => console.log(`R$ ${valor.toFixed(2).toString().replace(".", ",")}`)

retornaValorReal(0.30000000000000004)