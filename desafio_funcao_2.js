// Parametro (nota) -> Conceito

function notaDoAluno(n1) {
    if (n1 == 10) {
        return "A+";
    } else if (n1 == 9) {
        return "A";
    } else if (n1 == 8) {
        return "B+";
    } else if (n1 == 7) {
        return "B";
    } else if (n1 == 6) {
        return "C+";
    } else if (n1 == 5) {
        return "C";
    } else if (n1 == 4) {
        return "D+";
    } else if (n1 == 3) {
        return "D";
    } else if (n1 == 2) {
        return "E";
    } else if (n1 == 1) {
        return "E-";
    } else if (n1 == 0) {
        return "F";
    } else {
        return "Nota inválida";
    }
}

let conceito = notaDoAluno(11)
console.log(conceito);


function notaParaConceito (nota) {
    switch (Math.ceil(nota)) {
    case 10: return("A+");
    case 9: return("A");
    case 8: return("B+");
    case 7: return("B");
    case 6: return("C+");
    case 5: return("C");
    case 4: return("D+"); 
    case 3: return("D"); 
    case 2: return("E+");
    case 1: return("E");
    case 0: return("F");
    default: return ("Conceito inválido");
    }
}
//let conceitoDoAluno = notaParaConceito(8.6);
console.log(`O conceito do Bruno é ${notaParaConceito(10)}`);
console.log(`O conceito do Vitoria é ${notaParaConceito(7)}`);
console.log(`O conceito do Vivian é ${notaParaConceito(7.8)}`);
console.log(`O conceito do Fabrício é ${notaParaConceito(3)}`);