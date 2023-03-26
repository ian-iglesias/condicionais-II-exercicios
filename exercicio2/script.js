// Crie uma função que receba do usuário sua nacionalidade, utilize um prompt que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const nacionalidade.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:

// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura com o switch-case que verifique se a nacionalidade guardada na const nacionalidade, é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O programa deve imprimir "nacionalidade não encontrada" caso o valor de nacionalidade não corresponda a nenhum dos valores.


let nacionalidade = prompt("Digite aqui sua nacionalidade").toLowerCase()
let nacionalidadeUsuario

switch(nacionalidade){
    case "brasileira":
        nacionalidadeUsuario  = "Nacionalidade Brasileira"
        break;

    case "argentina":
        nacionalidadeUsuario = "Nacionalidade Argentina"
        break;

    case "uruguaia":
        nacionalidadeUsuario = "Nacionalidade Uruguaia"
        break;

    case "chilena":
        nacionalidadeUsuario = "Nacionalidade Chilina"
        break;

    case "colombiana":
        nacionalidadeUsuario = "Nacionalidade Colombiana"
        break;
    default:
        nacionalidadeUsuario = "Nacionalidade não encontrada"
            break;
}

console.log(nacionalidadeUsuario);