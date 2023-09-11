const texto = `CPF dos Aprovados:
- 600.567.890-12
- 765.998.345-23`

console.log(texto.match(/\d.+/g))

console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))

