Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        return "Quadro de honra"
    } else if (nota.entre(7, 8.99)) {
        return 'Aprovado'
    } else if (nota.entre(4, 6.99)) {
        return 'Recuperação'
    } else if (nota.entre(0, 3.99)) {
        return 'Reprovado'
    } else {
        return 'Nota inválida'
    }
}

console.log(imprimirResultado(10)) // Quadro de honra
console.log(imprimirResultado(7))  // Aprovado
console.log(imprimirResultado(4))  // Recuperação
console.log(imprimirResultado(2))  // Reprovado
console.log(imprimirResultado(-1)) // Nota inválida
console.log(imprimirResultado(11)) // Nota inválida




