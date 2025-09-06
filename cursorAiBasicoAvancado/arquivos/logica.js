function ehLetraDoAlfabeto(letra) {
    const charCode = letra.toLowerCase().charCodeAt(0);
    return charCode >= 97 && charCode <= 122; // Códigos ASCII para 'a' a 'z'
}

console.log(ehLetraDoAlfabeto('a'));
console.log(ehLetraDoAlfabeto('b'));
console.log(ehLetraDoAlfabeto('c'));
console.log(ehLetraDoAlfabeto('Z'));
console.log(ehLetraDoAlfabeto('5'));
console.log(ehLetraDoAlfabeto('!'));