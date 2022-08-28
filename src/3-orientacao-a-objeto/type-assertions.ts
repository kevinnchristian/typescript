// Type assertions: serve para indicar ao compilador do typescript que a tipagem
//                  de um trecho de código deve ser "X" ao invés de "Y".
type JogoAssertion = {
  nome: string;
  descricao: string;
}

let jogo = {} as JogoAssertion;
let jogo1 = <JogoAssertion>{};
