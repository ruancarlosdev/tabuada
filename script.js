
const readline = require('readline');

// Configuração do readline para interação no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função principal para gerar a tabuada
function gerarTabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Função para solicitar o número ao usuário
function perguntarNumero() {
    rl.question("Digite um número para gerar a tabuada: ", (input) => {
        const numero = parseInt(input);

        if (isNaN(numero)) {
            console.log("Por favor, digite um número válido.");
            return perguntarNumero();
        }

        gerarTabuada(numero);
        rl.close();
    });
}

// Inicia o programa
console.log("Bem-vindo ao programa de tabuada!");
perguntarNumero();
