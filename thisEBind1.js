
const pessoa ={
    saudacoa: 'Bom dia',
    falar(){
        console.log(this.saudacoa)
    }
}

pessoa.falar()

//armazena função dentro do objeto
const falar = pessoa.falar()
falar() //conflito entre paradigmas: funcional e POO

//o .bind passa um objeto que seja resolvido o 'this'
const falarDePessoa = pessoa.falar.bind(pessoa)//nesse caso o this irá ser a constante pessoa
falarDePessoa()
