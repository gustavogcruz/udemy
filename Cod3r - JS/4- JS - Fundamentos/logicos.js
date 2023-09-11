// tabela verdade

/* 

* V e V - Verdadeiro
* V e F - Falso
* F e qualquer coisa - Falso

* V ou qualquer coisa - Verdadeiro
* F ou V - Verdadeiro
* F ou F - Falso

v XOR v - Falso
v XOR F - Verdadeiro
f XOR v - Verdadeiro
f XOR f - Falso

!v -> f
!f -> v

*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor 
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} // da forma passada a chave e valor serão iguais.

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))