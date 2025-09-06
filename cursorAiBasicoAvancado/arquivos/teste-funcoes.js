// Teste das Funções Matemáticas
const { 
    somar, 
    subtrair, 
    multiplicar, 
    dividir,
    fatorial,
    potencia,
    raizQuadrada,
    media,
    mediana,
    maximo,
    minimo,
    somarArray,
    ehPrimo,
    gerarPrimos,
    mdc,
    mmc,
    grausParaRadianos,
    radianosParaGraus,
    seno,
    cosseno,
    tangente,
    arredondar,
    ehPar,
    ehImpar,
    valorAbsoluto
} = require('./funcoes-matematicas.js');

console.log('=== TESTE DAS FUNÇÕES MATEMÁTICAS ===\n');

// Teste das funções básicas
console.log('1. FUNÇÕES BÁSICAS:');
console.log(`Somar: 5 + 3 = ${somar(5, 3)}`);
console.log(`Subtrair: 10 - 4 = ${subtrair(10, 4)}`);
console.log(`Multiplicar: 6 * 7 = ${multiplicar(6, 7)}`);
console.log(`Dividir: 15 / 3 = ${dividir(15, 3)}`);

// Teste das funções avançadas
console.log('\n2. FUNÇÕES AVANÇADAS:');
console.log(`Fatorial de 5 = ${fatorial(5)}`);
console.log(`Potência: 2^8 = ${potencia(2, 8)}`);
console.log(`Raiz quadrada de 16 = ${raizQuadrada(16)}`);

// Teste com arrays
const numeros = [10, 20, 30, 40, 50];
console.log('\n3. ESTATÍSTICAS COM ARRAY [10, 20, 30, 40, 50]:');
console.log(`Média: ${media(numeros)}`);
console.log(`Mediana: ${mediana(numeros)}`);
console.log(`Máximo: ${maximo(numeros)}`);
console.log(`Mínimo: ${minimo(numeros)}`);
console.log(`Soma do array: ${somarArray(numeros)}`);

// Teste de números primos
console.log('\n4. NÚMEROS PRIMOS:');
console.log(`7 é primo? ${ehPrimo(7)}`);
console.log(`15 é primo? ${ehPrimo(15)}`);
console.log(`Números primos até 20: ${gerarPrimos(20)}`);

// Teste de MDC e MMC
console.log('\n5. MDC E MMC:');
console.log(`MDC de 48 e 18 = ${mdc(48, 18)}`);
console.log(`MMC de 12 e 18 = ${mmc(12, 18)}`);

// Teste de trigonometria
console.log('\n6. TRIGONOMETRIA:');
console.log(`30 graus em radianos = ${arredondar(grausParaRadianos(30), 4)}`);
console.log(`π/2 radianos em graus = ${arredondar(radianosParaGraus(Math.PI/2), 2)}`);
console.log(`Seno de 30° = ${arredondar(seno(30), 4)}`);
console.log(`Cosseno de 60° = ${arredondar(cosseno(60), 4)}`);
console.log(`Tangente de 45° = ${arredondar(tangente(45), 4)}`);

// Teste de utilidades
console.log('\n7. FUNÇÕES DE UTILIDADE:');
console.log(`Arredondar 3.14159 para 2 casas = ${arredondar(3.14159, 2)}`);
console.log(`8 é par? ${ehPar(8)}`);
console.log(`7 é ímpar? ${ehImpar(7)}`);
console.log(`Valor absoluto de -15 = ${valorAbsoluto(-15)}`);

// Teste de tratamento de erros
console.log('\n8. TESTE DE TRATAMENTO DE ERROS:');
try {
    console.log('Tentando dividir por zero...');
    dividir(10, 0);
} catch (error) {
    console.log(`Erro capturado: ${error.message}`);
}

try {
    console.log('Tentando fatorial de número negativo...');
    fatorial(-5);
} catch (error) {
    console.log(`Erro capturado: ${error.message}`);
}

console.log('\n=== TESTE CONCLUÍDO ==='); 