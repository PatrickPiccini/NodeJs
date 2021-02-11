//Function normal
let dobro = function(a){
    return 2 * a
}

//function usando arrow
dobro = (a) =>{
    return 2 * a
}

//function usando arrow mais reduzida

dobro = a => 2 * a //return esta implicito

console.log(dobro(Math.PI))

//Function normal
let ola = function () {
    return 'Ola'
}

//function usando arrow mais reduzida
ola = () => 'Ola'
ola = _ => 'Ola' // possui um unico parametro

console.log(ola())