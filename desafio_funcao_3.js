const nota1 = 8;
const nota2 = 8;
const nota3 = 2;

function escolhaDasNotas (n1, n2, n3) {
    if (n1 >= n2 && n2 > n3) {
        return n1 + n2;
    } else if (n2 >= n1  && n1 >= n3) {
        return n2 + n1;
    } else if (n3 >= n1 && n1 >= n2) {
        return n3 + n1;
    } else {
        return n3 + n2
    }
    
}
let somaDasNotas = escolhaDasNotas(nota1, nota2, nota3);
//console.log(somaDasNotas);


function mediaDasNotas (n1) {
    return n1 / 2;
}

let mediaDoAluno = mediaDasNotas(somaDasNotas);
//console.log(mediaDoAluno);


function aprovacao (media) {
        if (media >= 7 && media <=10) {
            return `Parabéns sua média foi ${media} passou de ano`;
        } else if (media < 7 && media >= 4) {
            return `Sua media foi ${media} e você está de recuperação`;
        } else if (media < 4 && media >=0) {
            return `Sua media foi ${media}, Você está reprovado`;
        } else {
            return "nota inválida";
        }
        
    }


console.log(aprovacao(mediaDoAluno));
