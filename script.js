function imprimirTabuada(numero, ate) {
    if (typeof numero !== 'number' || isNaN(numero) || typeof ate !== 'number' || isNaN(ate)) {
      console.error("Por favor, insira números válidos para o número da tabuada e até onde ela deve ir.");
      return;
    }
  
      if (ate < 1) {
          console.error("O valor 'até' deve ser maior ou igual a 1.");
          return;
      }
  
    console.log(`Tabuada do ${numero} (até ${ate}):`);
    for (let i = 1; i <= ate; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question('Digite o número para a tabuada: ', (numeroInput) => {
      const numero = parseInt(numeroInput);
  
    readline.question('Digite até qual número deseja calcular a tabuada: ', (ateInput) => {
      const ate = parseInt(ateInput);
  
      imprimirTabuada(numero, ate);
  
      readline.close();
    });
  });