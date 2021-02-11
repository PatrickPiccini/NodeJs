//function normal
let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)

//function usando arrow
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)


//function usando Arrow e .bind
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)


//o this em uma finction arrow é associado ao contexto no qual a função foi escrita