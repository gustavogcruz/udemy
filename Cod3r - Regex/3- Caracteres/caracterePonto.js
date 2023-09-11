// . é um coringa, válido para uma posição

const texto = '1,2,3,4,5,6,7,8,9,0'
console.log(texto.match(/1.2/g)) // um caracter entre 1 e 2
console.log(texto.match(/1..2/g))
console.log(texto.match(/1.., /g))

const notas = '8.3,7.1,8.8,10.0'
console.log(notas.match(/8../g))
console.log(notas.match(/.\../g)) // um ( . ) caractere
console.log(notas.match(/.+\../g))// um ( . ) caracteres ou mais ( + )

//Problema Ponto com \n
// dotail - algumas linguagens tem um flag /exp/s, mas JS não!

const texto2 = 'Bom\ndia'
console.log(texto2.match(/./gi))
console.log(texto2.match(/..../gi))