function promiseDados (){
    return dados = new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve('Terminei de esperar');
        },3000);
    });
}

async function espera(){
    const finalizado = await promiseDados();
    console.log(finalizado);
}

espera()
