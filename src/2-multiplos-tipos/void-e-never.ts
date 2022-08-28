// Todo função em javascript por padrão retorna algo

// void - é usado para justamente determinar que a função não irá retorna nada/vazia
function funcVoid(): void {
  console.log('Essa função é do tipo void, não tem retorno');
}

// never - é usado para laços de repetição infinitos ou, funções que disparam erros
function funcNever(): never {
  throw new Error('Error.');
}