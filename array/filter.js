const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro ', preco: 12.49, fragil: false},
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produtos => produtos.fragil

 
console.log(produtos.filter(caro).filter(fragil))