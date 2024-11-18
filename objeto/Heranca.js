const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 240
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

function MeuObeto(){}
console.log(Object.prototype, typeof MeuObeto)
console.log(Object.prototype, MeuObeto.prototype)


