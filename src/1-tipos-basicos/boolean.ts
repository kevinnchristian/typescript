let estaAtivo: boolean;
estaAtivo = true;

function mapearStatusDeUsuário(status: boolean) {
  if (status) {
    return 'Usuário está ativo';
  } else {
    return 'Usuário NÃO está ativo';
  }
}

mapearStatusDeUsuário(true);