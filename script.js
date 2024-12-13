// Arquivo para ser executado no Node.js (VSCode e plataformas como Vercel)

// Função principal para gerar a tabuada
alert('Faça seus cálculos aqui')
function gerarTabuada(numero) {
    let contador = 1;
    while (contador <= 10) {
        const resultado = numero * contador;
        console.log(`${numero} x ${contador} = ${resultado}`);
        contador++;
    }
}

// Solicita ao usuário que informe um número via variável ambiente ou argumento
const numero = parseInt(process.argv[2]);

if (isNaN(numero)) {
    console.log("Por favor, forneça um número válido ao executar o script.\nExemplo: node tabuada.js 5");
} else {
    gerarTabuada(numero);
}