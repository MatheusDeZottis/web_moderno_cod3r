/* O método `Object.freeze()` em JavaScript é usado para congelar um objeto, impedindo que suas propriedades sejam adicionadas, removidas ou alteradas. Isso é útil quando você deseja garantir que o estado de um objeto permaneça inalterado após um determinado ponto, adicionando uma camada de imutabilidade.

Aqui estão alguns pontos importantes sobre `Object.freeze()`:

1. **Congelamento Superficial**: `Object.freeze()` apenas congela o nível superior de propriedades do objeto. Se o objeto contiver outros objetos como valores de suas propriedades, essas propriedades internas ainda podem ser modificadas. Para tornar todo o objeto completamente imutável, é necessário congelar as propriedades internas de maneira recursiva.

2. **Propriedades e Métodos**: Após o uso do `Object.freeze()`, você não pode adicionar, remover ou alterar nenhuma propriedade ou método do objeto. Além disso, as propriedades do objeto também não podem ser reconfiguradas.

3. **Tentativas de Modificação**: Se você tentar modificar um objeto congelado em um ambiente de modo estrito (strict mode), o JavaScript lançará um erro. Em um ambiente normal, as tentativas de modificação não terão efeito, mas também não gerarão erro.

4. **Verificação de Congelamento**: Você pode verificar se um objeto está congelado usando `Object.isFrozen(objeto)`, que retornará `true` se o objeto estiver congelado.

### Exemplo de Uso
 */
//javascript
const pessoa = {
  nome: "Alice",
  idade: 30,
};

 Object.freeze(pessoa);

pessoa.idade = 35; // Não terá efeito, pois o objeto está congelado
pessoa.novaPropriedade = "Teste"; // Também não terá efeito

console.log(pessoa); // { nome: "Alice", idade: 30 }


/* ## Tornando o Objeto Totalmente Imutável

Para realizar um congelamento profundo, onde todas as propriedades internas também são congeladas, você pode fazer  isso recursivamente:
 */
//javascript
function deepFreeze(obj) {
  // Recupera os nomes de todas as propriedades do objeto
  const propNames = Object.getOwnPropertyNames(obj);

  // Congela as propriedades antes de congelar o objeto em si
  for (const name of propNames) {
    const value = obj[name];

    // Congela o valor se for um objeto
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
}

const pessoaCompleta = {
  nome: "Alice",
  idade: 30,
  endereco: {
    cidade: "São Paulo",
    estado: "SP"
  }
};

/* deepFreeze(pessoaCompleta);

pessoaCompleta.endereco.cidade = "Rio de Janeiro"; // Sem efeito
console.log(pessoaCompleta); */


/* Esse comportamento é útil para situações onde objetos imutáveis são preferíveis, como em estados de aplicativos front-end (Redux, por exemplo), em que o congelamento dos objetos ajuda a evitar mutações indesejadas. */