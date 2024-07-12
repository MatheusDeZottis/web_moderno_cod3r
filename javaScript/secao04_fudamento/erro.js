// tratando erros usando o try 

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase)() + '!!!'
    } catch (e) {
        tatarErroElancar(e)
    }

}
    
const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)