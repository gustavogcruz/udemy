const texto = `1,2,3,4,5,6,a.b c!d?e\r\f	-
f_g`

console.log(texto.match(/\d/g)) // números [0-9]
console.log(texto.match(/\D/g)) // não números [^0-9]

console.log(texto.match(/\w/g)) // caracteres [a-zA-z0-9_]
console.log(texto.match(/\W/g)) // não caracteres [^a-zA-z0-9_]

console.log(texto.match(/\s/g)) // espaços [\t\n\r\f]
console.log(texto.match(/\S/g)) // não espaço [\t\n\r\f]


