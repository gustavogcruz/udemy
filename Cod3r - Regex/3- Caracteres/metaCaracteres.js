/* Meta Caracteres 

- Representantes

* . um caractere qualquer
* [] conjunto de caracteres permitidos
* [^] conjunto de caracteres negados

- Quantificadores

* ? - Opcional - Zero ou Um
* * - Asterisco - Zero ou Um
* + - Mais - Um ou mais
* {n,m} - Chaves - de N até M

- Âncoras

* ^ - circunflexo - inicio de linha
* $ - cifrão - fim de linha
* \b - borda - inicio ou fim da palavra

- Outros Metacaracteres

\ - escape - uso de metacaracteres com literal
| - Ou 
() - grupo - define um grupo
\1..\9 - retrovisor - resgata grupos já definidos

*/ 

// . ? * + - ^ $ | [ ] { } ( ) \ :

const texto ='1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g
console.log(texto.split(regexPonto))

const regexSimbols=/,|\.|\?|!| /g
console.log(texto.split(regexSimbols))

