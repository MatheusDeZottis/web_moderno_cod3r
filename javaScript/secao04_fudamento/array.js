const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[3])

valores[4] = 10

console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())// pega o ultimo elemento do array o pop

delete valores[0] // deletar o primeiro elemento do array

console.log(valores)
console.log(typeof valores)


