function esperar(segundos){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve({inserir:"Inserir Dados", dadosCapturado:"Dados capturados", salvo:"Dados salvo no Banco de Dados"});
        }, segundos * 1000)
    })
}

async function todasMesmoTempo(){

    const resultado = await Promise.all([
        esperar(2), 
        esperar(3),
        esperar(1)
    ]);
  console.log(resultado[0].inserir);          
  console.log(resultado[1].dadosCapturado);   
  console.log(resultado[2].salvo);   
}

todasMesmoTempo();
