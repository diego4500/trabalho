/*
Crie uma função assíncrona chamada getNumber que retorna o número 10 após 1 segundo de espera. Depois, chame essa função e mostre o resultado no console.

<details> <summary>Resposta</summary>

*/

function aguardarTempo(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Passou 10 segundos");
            resolve();
        }, 10000)
    })   
}
async function getNumber(){
 await aguardarTempo();
 return 10;
}

getNumber().then(console.log)