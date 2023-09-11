const escola = 'Quintino'
console.log(escola)
console.log(typeof escola)
console.log(escola.charAt(4)) //retorna letra que está no indice indicado. JS é zero base.
console.log(escola.charAt(8)) //retorna vazio além do indice indicado
console.log(escola.charCodeAt(7)) //retorna o código da tabela Unicode do elemento no indice.
console.log(escola.indexOf('Q')) // retorna o indice do elemento informado.
console.log(escola.substring(1)) // retorna os elementos menos o indice indicado
console.log(escola.substring(0,3)) // retorna os elementos a partir e retirando o último indicado.

console.log('Instituto '.concat(escola).concat('!')) // retorna os elementos a partir e retirando o último indicado.
console.log('Instituto ' + escola + ('!')) // concatena da mesma forma que o CONCAT, usando o operador + 


console.log(escola.replace('Q', 'X')) // altera o elemento informado para o novo elemento informado.
console.log('theo,ana,otto'.split(','))
