const pilotos = ['Verttel', 'Alonso', 'Raikkonnem', 'Massa']
pilotos.pop()// massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift()
console.log(pilotos)

// splice pode adicionar e remover elementos 

pilotos.splice(2, 0, 'Botas', 'Massa' )
console.log(pilotos)

//remover

pilotos.splice(3, 1) // massa quebrou 
console.log(pilotos)

const algunspilotos1 = pilotos.slice(2) // novo array
console.log(algunspilotos1)

const algunspilotos2 = pilotos.slice(1, 4)
console.log(algunspilotos2)
