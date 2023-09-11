/*
* FLAGS
* g - global
* i - ignore case
* m - multilinhas
*/

const texto = 'Carlos assinou o abaixo-assinado.'
console.log(texto.match(/C|ab/))
console.log(texto.match(/c|ab/i))
console.log(texto.match(/ab|c/gi))
