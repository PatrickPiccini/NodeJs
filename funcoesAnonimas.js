//função anonima é uma função que não tem nome 

const soma = function (x, y){
    return x + y

}

const imprimirResultado = function(a,b, orepacao = soma) {
    console.log(orepacao(a,b))
}

imprimirResultado(3, 4)
imprimirResultado(3,4, function(x, y){
    return x - y
})

const pessoa = {
    fala: function (){
        console.log('Ola')
    }
}

pessoa.fala()