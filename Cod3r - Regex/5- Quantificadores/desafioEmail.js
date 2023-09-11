const texto = `Os e-mails dos convidados são:
- fulando@cod3r.com.br
- theocruz@gmail.com
- joao@empresa.com.br
- maria_silva@registro.com.br
- rafa.sampaio@yahoo.com
`


console.log(texto.match(/[a-z0-9].+@[a-z0-9].+/gi))

//console.log(texto.match(/[a-z0-9].+@[a-z0-9].+/gi))
//console.log(texto.match(/\w.+@\w.+/gi))

//console.log(texto.match(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,4}/gi))
//console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))

//no futuro uso de grupo...
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.?\w{0,2})?/g))


