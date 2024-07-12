function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com' + nota)
    }
}

soBoaNoticia(8,1)
soBoaNoticia(6,1)

function serForVerdadeEuFalo(valor) {
    if(valor){
        console.log('É verdade....' + valor)
    }
}

serForVerdadeEuFalo()
serForVerdadeEuFalo(null)
serForVerdadeEuFalo(undefined)
serForVerdadeEuFalo(NaN)
serForVerdadeEuFalo('')
serForVerdadeEuFalo(0)
serForVerdadeEuFalo(-1)
serForVerdadeEuFalo('?')
serForVerdadeEuFalo([])
serForVerdadeEuFalo([1, 2])
serForVerdadeEuFalo({})





