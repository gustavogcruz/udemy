const texto1 = `

Inválidas:
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

Válidas:
#OpA1?
Foi123!
`

console.log(texto1.match(/^.{6,20}$/gm))
console.log(texto1.match(/^(?=.*[A-Z]).{6,20}$/gm))
console.log(texto1.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm))
