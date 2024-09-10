function Carro (velocidadeDeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0
   // metodo publico
   this.acelerar = function() {
    if(velocidadeAtual + delta <= velocidadeDeMaxima){
        velocidadeAtual += delta
        
    } else{
        velocidadeAtual = velocidadeDeMaxima
    }
   }
   
   // metodo publico
   this.getVelocidadeAtual = function(){
    return velocidadeAtual
   }
   }
 