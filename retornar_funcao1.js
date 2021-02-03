function retornar() {


    function bomDia() {
        return "Bom dia!!!";
    }

    return bomDia;
}

console.log(retornar);
console.log(retornar());
console.log(retornar()());

// no primeiro caso ele vai retornar falando que retornar é uma function. No segundo caso ele vai pegar e vai entrar dentro da função retornar e vai ver que tem uma outra função, então ele vai retornar a function que ele achou... no caso bomDia. Por fim no terceiro caso ele vai entrar na função retornar e na função bomDia... exibindo então o return que tem dentro de bomDia que é "Bom Dia!!!"