const texto1 = 'Romário era um excelente jogador\n, mas hoje é um politico questionador'

console.log(texto1.match(/^r.*r$/gi)) // problema do dotall
console.log(texto1.match(/^r[\s\S]*r$/gi)) // problema do dotall