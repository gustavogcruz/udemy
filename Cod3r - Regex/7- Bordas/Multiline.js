const texto1 = `
Leo é muito legal
Emmanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto1.match(/\n/g))

console.log(texto1.match(/^(\w).*\1$/g))

console.log(texto1.match(/^(\w).*\1$/gim)) // flag m - multiline