const aplicarCor = (txt, reg, cor) => 
txt.replace(reg,`<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./files')
const texto = files.read('codigoFonte.html')

const codRegex = /<code>[\s\S]*<\/code>/i
let codigo = texto.match(codRegex)[0]

//String
codigo = aplicarCor(codigo, /(\".*")/g, 'ce9178')

//palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857c7')

//tipos
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2')

//comentários de multiplas linhas
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

//comentários de uma linha
codigo = aplicarCor(codigo, /(\/\/.*)/g, '267703')

const conteudoFinal = texto.replace(codRegex, codigo)
files.write('codigoFonte.html', conteudoFinal)