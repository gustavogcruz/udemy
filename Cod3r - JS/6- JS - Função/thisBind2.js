function Pessoa() {
    this.idade = 0

    const self = this // this foi amarrado a uma constante e ela é chamada
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}

new Pessoa