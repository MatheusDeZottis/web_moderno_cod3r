const sequencia = {
    _valor: 1, // Convenção de uso de "_" para propriedades internas

    get valor() {
        return this._valor++
    },

    set valor(valor) {
        // Só permite atualizar se o novo valor for maior que o valor atual
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

// Testando
console.log(sequencia.valor) 
console.log(sequencia.valor)
sequencia.valor = 100;
console.log(sequencia.valor) 
sequencia.valor = 90;
console.log(sequencia.valor) 