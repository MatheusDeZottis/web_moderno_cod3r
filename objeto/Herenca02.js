// cadeia de prptótipos (Prototype chain)

const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr1)

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 240
}

console.log(ferrari)
console.log(volvo)
