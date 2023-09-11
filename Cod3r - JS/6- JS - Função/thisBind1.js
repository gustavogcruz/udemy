const pessoa = {
    saudadao: 'Bom dia!',
    falar() {
        console.log(this.saudadao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO.

const falarDePessoa = pessoa.falar.bind(pessoa) // metodo responsável por amarrar determinado objeto como dono do this
falarDePessoa()