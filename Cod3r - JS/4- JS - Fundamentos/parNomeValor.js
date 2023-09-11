// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Ana',
    idade: 1,
    peso: 1,
    endereco: {
         logradouro: 'Sempre em frente',
         numero: 234
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
