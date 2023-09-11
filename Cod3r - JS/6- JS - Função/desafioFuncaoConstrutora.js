function Pessoa(nome = '!Não Declarado!') {
        this.nome = nome // permite o acesso a variavel

     //metodo publico
    this.falar = () => console.log (`Meu nome é ${nome}`)

}

const p1 = new Pessoa('Ana')
p1.falar()
console.log(p1.nome= 'Otto')