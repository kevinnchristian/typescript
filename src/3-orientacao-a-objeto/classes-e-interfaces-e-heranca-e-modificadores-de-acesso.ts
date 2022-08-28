// classes e extends
class Usuario {
  public nome;
  public idade;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Player extends Usuario {
  public jogo;

  constructor(nome: string, idade: number, jogo: string) {
    super(nome, idade);

    this.jogo = jogo;
  }
}

const jogador = new Player('Kevin', 24, 'Resident Evil 4');

// static - metódos que podem ser acesso diretamente pelo objeto
class dataHora {
  public data;
  public horas;

  constructor(data: string, horas: string) {
    this.data = data;
    this.horas = horas;
  }

  static exibirQueHorasSao() {
    return new Date().getHours();
  }
}

console.log(dataHora.exibirQueHorasSao());

// private, protected, public - é a forma de como podemos acessar um valor de uma class
// public: é acessível de forma geral, dentro (métodos) e fora (instância da classe) da classe.
// private: é acessível apenas dentro da classe (na subclasses não é acessível)
//          onde o campo foi criado.
// protected: é acessível apenas dentro da classe (e subclasses) onde o campo foi criado.
class Jogo {
  public nomeDoJogador;
  private lucroDoJogo;
  protected amigosJogadores;

  constructor(nome: string, lucro: string, jogadores: [string, string]) {
    this.nomeDoJogador = nome;
    this.lucroDoJogo = lucro;
    this.amigosJogadores = jogadores;
  }

  dizerJogadores() {
    return `Os amigos jogadores são: ${this.amigosJogadores.join(', ')}`;
  }

  dizerLucro() {
    return `O lucro do game neste ano foi: $${this.lucroDoJogo}`;
  }
}

class JogoDLC extends Jogo {
  public dlcs;

  constructor(nome: string, lucro: string, jogadores: [string, string], dlcs: string) {
    super(nome, lucro, jogadores);

    this.dlcs = dlcs;
  }

  // Não funcionaria, pois a variável lucroDoJogo é private
  // dizerLucroComDLC() {
  //return `O lucro do game neste ano foi: $${this.lucroDoJogo + 100000}`;
  // }
}

const jogoUsuario = new Jogo('Kevin Christian', '1,000.000', ['Lucas', 'Gabriel']);
console.log(jogoUsuario.nomeDoJogador);
console.log(jogoUsuario.dizerJogadores());
console.log(jogoUsuario.dizerLucro());

const jogoDLC = new JogoDLC('Kevin Christian', '1,000.000', ['Lucas', 'Gabriel'], 'Gold');
console.log(jogoDLC.nomeDoJogador);
console.log(jogoDLC.dlcs);
console.log(jogoDLC.dizerJogadores());
console.log(jogoDLC.dizerLucro());

// interfaces e implements
// interfaces: é forma de atribuir que aquela classes deve conter um certo 
//             comportamento (campos, funções e etc...)
// interfaces X type alias: caso houver uma redeclaração da interface, ela vai mesclar
//                          coma a primeira declaração da interface.
interface ICaracteristaCarro {
  marca: string,
  anoDeLancamento: number,
}

class Carro implements ICaracteristaCarro {
  public nome;
  public marca;
  public anoDeLancamento;

  constructor(nome: string, marca: string, ano: number) {
    this.nome = nome;
    this.marca = marca;
    this.anoDeLancamento = ano;
  }
}

const carro = new Carro('GTR-35', 'Nissan', 2007);
console.log(carro);