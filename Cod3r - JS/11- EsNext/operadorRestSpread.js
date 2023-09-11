//operador ... rest(juntar) / spread(espalhar)
// usar rest com parâmetro de função

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12359.99}

const clone = { ativo: true, ...funcionario}

console.log(clone)

//usar spread com array
const grupoA = ['Theo', 'Ana', 'Otto']
const grupoFinal = ['Aramis', ...grupoA]
console.log(grupoFinal)