//nesses codigos fazemos com que acessemos o this de formas diferentes, porem o resultado é o mesmo(o que é esperado)

//possibilidade 1
function Pessoa (){
    this.idade = 0
    
    setInterval(function(){
        this.idade++
        console.log(this.idade)

    }.bind(this), 1000)
}
new Pessoa

//possibilidade2
function Pessoa (){
    this.idade = 0
    
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)

    }.bind(this), 1000)
}

new Pessoa