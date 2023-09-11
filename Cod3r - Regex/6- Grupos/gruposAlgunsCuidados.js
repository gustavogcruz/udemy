const texto1 = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

console.log(texto1.match(/[(abc)]/gi)) // não é um grupo

console.log(texto1.match(/([abc])/gi)) // é um grupo

console.log(texto1.match(/(abc)/gi))

console.log(texto1.match(/(abc)+/gi))


