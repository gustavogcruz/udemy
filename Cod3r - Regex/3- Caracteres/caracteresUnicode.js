// no inicio...
// Um byte (8 bits) - 256 caracteres
// Mapeia alguns Simbolos, Pontuação, A-Z, a-z, 0-9


// Dois Bytes (16 bits) - 65500+ caracteres
// +Simbolos,  +Pontuação,  A-Z, a-z, 0-9

//Unicode
//Quantidade de Bytes Variável - Expansível
//Suporta mais de 1 milhão de caracteres
//Atualmente tem mais de 100.000 caracteres atribuídos

// https://unicode-table.com/pt

const texto = 'aäbþc'
// \u - referência elementos da tabela UNICODE
console.log(texto.match(/\u00E4|\u00FE/g))