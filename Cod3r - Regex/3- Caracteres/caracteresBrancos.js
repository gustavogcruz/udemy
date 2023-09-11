const texto =  `
ca	r
r	o s!
`

// \t - TAB
// \n - quebra de linha
// \s - espaço - pode ser usado para \t\n\f

console.log(texto.match(/ca\tr\nr\to\ss!/))