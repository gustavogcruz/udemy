//declaração com LET com escopo global, função e de bloco

var numero = 1 
{
    let numero = 2 // let trabalha por escopo. do mais perto, ao abrangente.
    console.log('dentro =', numero)
}
console.log('fora =', numero)

