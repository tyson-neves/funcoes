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
