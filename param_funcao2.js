function somar(a = 0, b = 0, c = 0 , d = 0) { // resolvendo o problema do undefined se vc igualar o parâmetro a 0  vc define o valor do parâmetro e por isso ele não fica undefined e como é 0 ele não altera a conta, pois a soma com 0 não influencia o resultado.
    return a + b + c + d;
}

console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));  
console.log(somar(1, 2));  
console.log(somar(1));  
console.log(somar());  
console.log("fim!")