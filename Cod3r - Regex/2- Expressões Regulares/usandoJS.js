const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
console.log(regexNove.test(texto))
console.log(regexNove.exec(texto))

const regexLetras = /[a-f]/g
console.log('Métodos da string...')
console.log(texto.match(regexLetras)) // retorna o conteúdo a partir do regex
console.log(texto.search(regexLetras)) // localiza o primeiro index apartir da regex
console.log(texto.replace(regexLetras, 'Achei')) // altera os elementos da regex por outro informado
console.log(texto.split(regexLetras)) // retorna os elementos em uma array