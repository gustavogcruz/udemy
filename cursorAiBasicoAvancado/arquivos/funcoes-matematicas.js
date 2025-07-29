// Funções Matemáticas em JavaScript
// Coleção de funções úteis para cálculos matemáticos

// ===== FUNÇÕES BÁSICAS =====

/**
 * Soma dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} Soma dos números
 */
function somar(a, b) {
    return a + b;
}

/**
 * Subtrai dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} Diferença dos números
 */
function subtrair(a, b) {
    return a - b;
}

/**
 * Multiplica dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} Produto dos números
 */
function multiplicar(a, b) {
    return a * b;
}

/**
 * Divide dois números
 * @param {number} a - Numerador
 * @param {number} b - Denominador
 * @returns {number} Quociente da divisão
 */
function dividir(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida");
    }
    return a / b;
}

// ===== FUNÇÕES AVANÇADAS =====

/**
 * Calcula o fatorial de um número
 * @param {number} n - Número para calcular o fatorial
 * @returns {number} Fatorial do número
 */
function fatorial(n) {
    if (n < 0) {
        throw new Error("Fatorial não definido para números negativos");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

/**
 * Calcula a potência de um número
 * @param {number} base - Base
 * @param {number} expoente - Expoente
 * @returns {number} Resultado da potência
 */
function potencia(base, expoente) {
    return Math.pow(base, expoente);
}

/**
 * Calcula a raiz quadrada
 * @param {number} numero - Número para calcular a raiz
 * @returns {number} Raiz quadrada
 */
function raizQuadrada(numero) {
    if (numero < 0) {
        throw new Error("Raiz quadrada não definida para números negativos");
    }
    return Math.sqrt(numero);
}

/**
 * Calcula a média de um array de números
 * @param {number[]} numeros - Array de números
 * @returns {number} Média dos números
 */
function media(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new Error("Array vazio ou inválido");
    }
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}

/**
 * Calcula a mediana de um array de números
 * @param {number[]} numeros - Array de números
 * @returns {number} Mediana dos números
 */
function mediana(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new Error("Array vazio ou inválido");
    }
    
    const ordenados = [...numeros].sort((a, b) => a - b);
    const meio = Math.floor(ordenados.length / 2);
    
    if (ordenados.length % 2 === 0) {
        return (ordenados[meio - 1] + ordenados[meio]) / 2;
    } else {
        return ordenados[meio];
    }
}

/**
 * Calcula o máximo de um array de números
 * @param {number[]} numeros - Array de números
 * @returns {number} Valor máximo
 */
function maximo(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new Error("Array vazio ou inválido");
    }
    return Math.max(...numeros);
}

/**
 * Calcula o mínimo de um array de números
 * @param {number[]} numeros - Array de números
 * @returns {number} Valor mínimo
 */
function minimo(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new Error("Array vazio ou inválido");
    }
    return Math.min(...numeros);
}

/**
 * Calcula a soma de um array de números
 * @param {number[]} numeros - Array de números
 * @returns {number} Soma dos números
 */
function somarArray(numeros) {
    if (!Array.isArray(numeros)) {
        throw new Error("Parâmetro deve ser um array");
    }
    return numeros.reduce((acc, num) => acc + num, 0);
}

/**
 * Verifica se um número é primo
 * @param {number} numero - Número para verificar
 * @returns {boolean} True se for primo, false caso contrário
 */
function ehPrimo(numero) {
    if (numero < 2) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) return false;
    }
    return true;
}

/**
 * Gera números primos até um limite
 * @param {number} limite - Limite superior
 * @returns {number[]} Array com números primos
 */
function gerarPrimos(limite) {
    const primos = [];
    for (let i = 2; i <= limite; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

/**
 * Calcula o MDC (Máximo Divisor Comum)
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} MDC dos números
 */
function mdc(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

/**
 * Calcula o MMC (Mínimo Múltiplo Comum)
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} MMC dos números
 */
function mmc(a, b) {
    return Math.abs(a * b) / mdc(a, b);
}

/**
 * Converte graus para radianos
 * @param {number} graus - Ângulo em graus
 * @returns {number} Ângulo em radianos
 */
function grausParaRadianos(graus) {
    return graus * (Math.PI / 180);
}

/**
 * Converte radianos para graus
 * @param {number} radianos - Ângulo em radianos
 * @returns {number} Ângulo em graus
 */
function radianosParaGraus(radianos) {
    return radianos * (180 / Math.PI);
}

/**
 * Calcula o seno de um ângulo em graus
 * @param {number} graus - Ângulo em graus
 * @returns {number} Seno do ângulo
 */
function seno(graus) {
    return Math.sin(grausParaRadianos(graus));
}

/**
 * Calcula o cosseno de um ângulo em graus
 * @param {number} graus - Ângulo em graus
 * @returns {number} Cosseno do ângulo
 */
function cosseno(graus) {
    return Math.cos(grausParaRadianos(graus));
}

/**
 * Calcula a tangente de um ângulo em graus
 * @param {number} graus - Ângulo em graus
 * @returns {number} Tangente do ângulo
 */
function tangente(graus) {
    return Math.tan(grausParaRadianos(graus));
}

// ===== FUNÇÕES DE UTILIDADE =====

/**
 * Arredonda um número para um número específico de casas decimais
 * @param {number} numero - Número para arredondar
 * @param {number} casas - Número de casas decimais
 * @returns {number} Número arredondado
 */
function arredondar(numero, casas = 2) {
    return Math.round(numero * Math.pow(10, casas)) / Math.pow(10, casas);
}

/**
 * Verifica se um número é par
 * @param {number} numero - Número para verificar
 * @returns {boolean} True se for par, false caso contrário
 */
function ehPar(numero) {
    return numero % 2 === 0;
}

/**
 * Verifica se um número é ímpar
 * @param {number} numero - Número para verificar
 * @returns {boolean} True se for ímpar, false caso contrário
 */
function ehImpar(numero) {
    return numero % 2 !== 0;
}

/**
 * Calcula o valor absoluto
 * @param {number} numero - Número
 * @returns {number} Valor absoluto
 */
function valorAbsoluto(numero) {
    return Math.abs(numero);
}

// ===== EXPORTAÇÃO DAS FUNÇÕES =====

// Para uso em Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
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
    };
}

// Para uso no navegador
if (typeof window !== 'undefined') {
    window.FuncoesMatematicas = {
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
    };
} 