const saudacao = 'Opa' // constexto léxico 1

function exec(){
    const saudacao = 'falaa' //contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua muito legal',
        numero: 123
    }
}