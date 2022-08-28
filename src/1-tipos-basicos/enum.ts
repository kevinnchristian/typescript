// ENUM é uma representação numérica de um valor legível

enum Permissoes {
  admin,
  editor,
  comum,
}

enum PermissoesValoresNaoNumericos {
  admin = 'ADMIN',
  editor = 'EDITOR',
  comum = 'COMUM',
}

enum Cores {
  red = '#ff0000',
  black = '#000',
}

const usuario = {
  perfil: Cores.red,
  nivel: Permissoes.admin,
}

const usuario2 = {
  perfil: Cores.black,
  nivel: PermissoesValoresNaoNumericos.admin,
}

console.log(usuario);
console.log(usuario2);