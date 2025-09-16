// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
  return v1 + v2;
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
  return v1 - v2;
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
  // Retorna uma mensagem de erro se a divisão for por zero
  if (v2 === 0) {
    return "Erro: Divisão por zero não é permitida.";
  }
  return v1 / v2;
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
  return v1 * v2;
}
