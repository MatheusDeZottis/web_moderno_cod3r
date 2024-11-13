// usando notação literal 

const objt1 = {}
console.log(objt1)

// Objeto em js

console.log(typeof Object, typeof new Object)

const objt2 = new Object
console.log(objt2)

// funcoes construturas

function produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto ('Notebook', 2298.98, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())