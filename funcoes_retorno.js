function textoOuNumero(retornaTexto) {
    if (retornaTexto) {
        return "Sou um texto";
    } else {
        return 1234; // o return é sempre a ultima coisa lida no código, ou seja, tudo que vc colocar baixo dele não vai ser lido. A nãp ser que vc tenha uma estrutura de controle com um if else. Se o primeiro return for falso ele vai continuar para o else
    }
}

let texto = textoOuNumero(true); 
console.log(texto);

console.log(textoOuNumero(false))
// Você náo precisa exatamente colocar o valor da função em uma variável, você pode simplesmente chamar a função no console como no exemplo acima.

// existe a possibilidade de fazer o mesmo exemplo com operador ternário que reduziria o numero de linhas da função.

function textoOuNumero2(retornaAlgo) {
    return retornaAlgo ? "Sou um texto" : 1234;
}

console.log(textoOuNumero2(true))
console.log(textoOuNumero2(false))