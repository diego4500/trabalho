async function retornaResolvida() {
  return 123; // Ou: return Promise.resolve(123);
}

async function exemploResolvida() {
  const resultado = await retornaResolvida();
  console.log('Resultado resolvido:', resultado); // Saída: 123
}

exemploResolvida();


function rejeitaDepoisDe10Segundos() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Promise rejeitada após 10 segundos!'));
    }, 10000); // 10.000 ms = 10 segundos
  });
}

async function executar() {
  try {
    await rejeitaDepoisDe10Segundos();
    console.log('Isto não será exibido.');
  } catch (erro) {
    console.log('Erro capturado:', erro.message);
  }
}

executar();

