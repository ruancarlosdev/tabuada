function imprimirTabuada(numero) {
    if (typeof numero !== 'number' || isNaN(numero)) {
      console.error("Por favor, insira um número válido.");
      return;
    }
  
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso:
  const numeroDaTabuada = 7; // Você pode alterar este número para a tabuada desejada
  imprimirTabuada(numeroDaTabuada);