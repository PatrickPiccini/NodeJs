//osando desestruturação com função e array
function rand([min=0, max=1000]){
    if(min>max)[min, max] = [max, min]
    const valor = Math.random()* (max - min) + min
    return Math.floor(valor)
}

//diferente de da função usando variavel, essa função usa um array, onde simplesmente só precisa coloar o valor que deseja utilizar no array no max e min
console.log(rand([50, 40]))

//define no array o valor min como 950 e o max como default(1000)
console.log(rand([950]))

//não define nada para o valor min, deixando como default(0) e define para o max o valor 10
console.log(rand([, 10]))

//numeros entre o array default(são os setados da função 0 á 1000)
console.log(rand([]))

//não desestrutura os elementos pois eles não são definidos
console.log(rand())
