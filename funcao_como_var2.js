function subtrair(a,b) {
    return a - b;
}
// Não necessariamente você tem que armazenar uma função anonima. Tu pode armazenar em uma variável uma função que ja existe como no caso. A função subtrair existe e funciona, mas eu posso armazenar ela em uma variável e ela vai funcionar do mesmo jeito.

const subtracao = subtrair;

console.log(subtrair(5, 2));
console.log(subtracao(5, 2));