// Solicita ao usuário que informe um número
const numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

// Inicializa o contador
let contador = 1;

// Loop para gerar a tabuada usando while
while (contador <= 10) {
    const resultado = numero * contador;
    console.log(`${numero} x ${contador} = ${resultado}`);
    contador++;
}
