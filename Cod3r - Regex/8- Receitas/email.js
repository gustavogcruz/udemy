const texto1 = `Os e-mails dos convidados são:
- fulando@cod3r.com.br
- theocruz@gmail.com
- joao@empresa.com.br
- maria_silva@registro.com.br
- rafa.sampaio@yahoo.com
- fulano+de+tal@escola.ninja.br
`

console.log(texto1.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g))

