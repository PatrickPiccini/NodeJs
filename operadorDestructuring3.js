//osando desestruturação com função e variaveis
//cria uma função randomica para gerar valores entre os valores minimos e maximos
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}
//numeros entre 40 e 50
console.log(rand({min: 40, max: 50}))

//numeros entre 950 e o default(1000)
console.log(rand({min: 950}))

//numeros entre os default(são os setados da função 0 á 1000)
console.log(rand({}))