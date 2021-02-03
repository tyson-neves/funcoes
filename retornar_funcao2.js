function retornarUmaFuncao() {
    return function () {
        return function () {
            return "Boa Tarde!!"
        }
    }
}

console.log(retornarUmaFuncao);
console.log(retornarUmaFuncao());
console.log(retornarUmaFuncao()());
console.log(retornarUmaFuncao()()());

// Tem como a gente criar uma função anonima igual no exemplo, diz o professor que isso vai ser util principalmente no paradigma funcional, apesar de agora não parecer fazer sentido