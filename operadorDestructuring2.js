//osando desestruturação com array
//array de uma posição
const [a] = [10]
console.log(a)

//atribiu em varias variaveis os valores que existem dentro de um array, para que possa trabalhar com esses dados individualmente 
const [n1, , n3, , n5, n6 = 0] = [10, 20, 30, 40]
console.log(n1, n3, n5, n6)

//desestrutura uma variavel de um array dentro de outra array
const [, [, nota]] = [[, 8, 8],[9, 6, 8]]
console.log(nota)


