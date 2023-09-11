const texto1 = 'Romário era um excelente jogador\n, mas hoje é um politico questionador'

console.log(texto1.match(/r/gi))
console.log(texto1.match(/^r/gi)) // ^ inicio da linha/string
console.log(texto1.match(/r$/gi)) // $ final da linha/string

console.log(texto1.match(/^r.*r$/gi)) // problema do dotall