function esperar(){
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve();
        },3000)
    })
}

async function simulacao (){
    console.log("Aguardando insersão de dados");
    await esperar();
    console.log('Recebendo dados do usuário');
    await esperar();
    console.log('Recebido');
    await esperar();
    console.log('Conectando com o banco de dados');
    await esperar();
    console.log('Dados salvo com sucesso');
}

simulacao();
