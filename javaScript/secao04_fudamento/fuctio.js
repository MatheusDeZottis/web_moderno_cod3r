// função sem retorno

function imprimirsoma(a, b){
    console.log(a + b)

}

imprimirsoma(20, 3)

//função com retorno

function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))

