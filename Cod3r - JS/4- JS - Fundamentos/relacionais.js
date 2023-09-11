console.log('01', '1' == 1) // igual - são iguais mesmo com tipos diferentes
console.log('02', '1' === 1) // estritamente igual - não são iguais, pois são tipos diferentes.
console.log('03', '3' != 3) // diferente  - não, iguais mesmo com tipos diferentes
console.log('04', '3' !== 3) // estritamente diferente - sim, pois são tipos diferentes.

console.log('05', 3 > 2)
console.log('06', 3 < 2)
console.log('07', 3 >= 2)
console.log('08', 3 <= 2)

const d1 = new Date(0) // 0 - data de referência - 01/01/1970
const d2 = new Date(0) // 0 - data de referência - 01/01/1970
console.log('09',d1 === d2)
console.log('10',d1 == d2)
console.log('11',d1.getTime() == d2.getTime())
console.log('12', undefined == null)
console.log('13', undefined === null)