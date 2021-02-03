// A função que sera executada, pois tem o console.log para exibir o resultado.

function executar(fn, n1, n2) {
    if (typeof fn === "function") {
    console.log(fn(n1, n2));
    }
} 

// Funções com a operação
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

// Chamando a função e as operações e passando os parâmetros
executar(somar, 90, 50);
executar(subtrair, 90, 50);
executar(multiplicar, 90, 50);
