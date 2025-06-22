const numeroPromise = new Promise ((resolve, reject) =>{
    const numeroRandomico = Math.ceil(Math.random() * 10) / 10;
    setTimeout(() =>{
        if(numeroRandomico > 0.5){
            resolve("Ganhou");
        }
        else{
            reject("Perdeu")
        }     
    },2000)
})

async function simulacaoCach (){
    try{
        const resposta = await numeroPromise;
        console.log(resposta)
    }catch (erro){
        console.error(erro)
    }
}

simulacaoCach();