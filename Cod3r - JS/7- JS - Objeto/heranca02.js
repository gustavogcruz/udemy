// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' // não faça isso em casa.

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '1'}
const filho = {__proto__: pai, attr3: 'C'}

// não irá achar, pois o atributo não é definido no fim da cadeia
//console.log(filho.attrA) 

// irá achar seu atributo e na cadeia acima até retornar undefined
//console.log(filho.attr1) 

/* ao chamar attr3 que pertence ao filho, ele será retornado. 
* Mesmo existindo outro atributo igual na cadeia.*/
//console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual+= delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324// shadow atributo velMax do carro.
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// função importante que estabele uma relação de protótipo entre dois objetos
Object.setPrototypeOf(ferrari, carro) 
Object.setPrototypeOf(volvo, carro) 

//console.log(ferrari)
//console.log(volvo)


volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
