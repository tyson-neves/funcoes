function semRetorno() {
    console.log("Função foi chamada!");
}
let a = 3;
let b = a * 7 + 10;
let c = semRetorno();
let d = a + b + c;

console.log(a,b,c,d);

// A função mesmo sendo undefined ela ainda está criada e pode ser utilizada... inclusive inutilizando sentenças validas, como no exemplo.