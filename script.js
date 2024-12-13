alert("Faça calculos da tabuada");
// handler.js
// Este arquivo pode ser usado tanto no VSCode quanto no Vercel

// Função principal para gerar a tabuada
function gerarTabuada(numero) {
    let resultado = `<h1>Tabuada do ${numero}:</h1>`;
    for (let i = 1; i <= 10; i++) {
        resultado += `<p>${numero} x ${i} = ${numero * i}</p>`;
    }
    return resultado;
}

// Função que trata as requisições HTTP
export default function handler(req, res) {
    const { query } = req; // Obtém os parâmetros da URL
    const numero = parseInt(query.numero);

    if (isNaN(numero)) {
        res.status(400).send(
            "Erro: Forneça um número válido como parâmetro. Exemplo: /api/tabuada?numero=5"
        );
        return;
    }

    const tabuadaHTML = gerarTabuada(numero);
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(tabuadaHTML);
}
