
// Função principal para gerar a tabuada
function gerarTabuada(numero) {
    let resultado = `<h1>Tabuada do ${numero}:</h1>`;
    for (let i = 1; i <= 10; i++) {
        resultado += `<p>${numero} x ${i} = ${numero * i}</p>`;
    }
    return resultado;
}

// Função para lidar com a requisição HTTP
export default function handler(req, res) {
    const { query } = req;
    const numero = parseInt(query.numero);

    if (isNaN(numero)) {
        res.status(400).send("Por favor, forneça um número válido como parâmetro na URL, por exemplo: /api/tabuada?numero=5");
        return;
    }

    const tabuada = gerarTabuada(numero);
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(tabuada);
}
