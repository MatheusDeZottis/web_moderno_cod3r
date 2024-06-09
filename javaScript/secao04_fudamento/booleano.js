let isAtivo = false
console.log(isAtivo)

isAtivo = true

console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

//em baixo estão situações verdadeiras 
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))

//em baixo estão situações falsas

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar ....')

console.log(!!( ''|| null || 0 || '')) //operações lógicas

let nome = 'Lucas'
console.log(nome || 'Desconhecido')












