const texto1 = 'supermercado hipermercado minimercado mercado'

console.log(texto1.match(/(super|hiper|mini)?mercado/g))
console.log(texto1.match(/((hi|su)per|mini)?mercado/g))