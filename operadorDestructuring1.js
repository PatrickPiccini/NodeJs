const pessoa = {
    nome: 'patrick',
    idade: 21,
    endereco: {
        casa: 'Av. Aleceu Laus',
        numero: 792
    }
}
//osando desestruturação com variaveis
//desestrutura variaveis de dentro de um objeto
const {nome, idade} = pessoa
console.log(nome, idade)

//desestrutura variaveis de dentro de um objeto e instanciando em novas variaveis
const {nome :n , idade: i} = pessoa
console.log(n, i)

//desestrutura uma variavel que não existe de dentro de um objeto 
const {sobrenome, teste=true} = pessoa
console.log(sobrenome, teste)

//desestrutura as variaveis de dentro de outra variavel aninhada
const {endereco: { casa, numero}}
console.log(casa, numero)