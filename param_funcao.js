function somar(a, b, c, d) {
    return a + b + c + d;
}

console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));  // gera um not a number pq como não colocamos o valor do parâmetro d ele coloca esse parâmetro como undefined e isso faz com que toda a conta seja undefined pq undefined + qualquer coisa é igual a undefined. MAS ELE NÃO GERA UM ERRO.

console.log("fim!")