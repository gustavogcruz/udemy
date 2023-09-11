const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

// retrovisor usa o que foi armazenado e retorna o conteúdo usando filtro adicional

console.log(texto1.match(/<(\w+)>.*<\/\1>/g))  // \1 - pega o primeiro grupo e usa o retrovisor.

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente).*\2.*\1/gi)) // \2 segundo grupo (mente) e \1 primeiro grupo(lenta)
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) //?: não armazenada o grupo

console.log(texto2.match(/(lenta)(mente)/gi)) 

console.log(texto2.match(/(lenta)(mente)?/gi)) //(mente)? opcional

console.log(texto2.replace(/(lenta)(mente)?/gi, '$2')) // usa replace para substituir o segundo retrovisor - $2

const texto3 = 'abcdefghijkll'

console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))

