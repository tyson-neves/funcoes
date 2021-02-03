function executar(param) {
    if (typeof param ==="function") {
        console.log(param());
    }
}

function bomDia() {
    return "bom dia ";
}

executar(3);
executar(bomDia);

// voce passa a função "bomDia" como um parâmetro para a function "executar" que vai verificar se o parâmetro é uma function... se for ela vai imprimir o console que no caso foi chamado a ser a function "bomDia"

const x = bomDia;
const y = bomDia();

console.log(x); // nesse caso o valor de x vai ser a funtion bomDia
console.log(y); // nesse caso vai ser o return da function bomDia. Imagine o "const y = bomDia();" esse () como "eu vou pegar o que tem dentro dessa function."