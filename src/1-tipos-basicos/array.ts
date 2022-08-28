const listaDoMercado: string[] = [];

listaDoMercado.push('Macarrão', 'Carne', 'Queijo');

function exibeLista(listaDoMercado: string[]) {
  return `Os itens são: ${listaDoMercado.join(', ')}`;
}

console.log(exibeLista(listaDoMercado));