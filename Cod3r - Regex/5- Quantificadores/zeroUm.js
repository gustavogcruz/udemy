const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'

const texto2 = 'There is a big fog in NYC'

// ? -> Zero ou Um  (opcional) - pode ser uma ou nenhuma ocorrência do caracter a esquerda de ?

const regex = /fogo?/gi
console.log (texto1.match(regex))
console.log (texto2.match(regex))