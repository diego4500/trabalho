/*
O que é promise?
Promise é um objeto usado para processamento de dados assíncrono. Ele representa uma operação que pode terminar no futuro,
dando certo (resolvida) ou dando errado (rejeitada). Veja a estrutura abaixo
*/

const promiseExemplo = new Promise((resolve, reject) =>{
    //aqui fica a lógica
})

const promiseExemplo2 = new Promise((resolve, reject) =>{

})

const promiseExemplo3 = new Promise((resolve, reject) =>{
    const sucesso = true;
    if(sucesso){
        resolve('Deu certo')
    }
    else{
        reject('Deu errado')
    }
})

// Aule 03 Consumindo uma Promise

function esperar(){
    return new Promise ((resolve, reject) =>{
        setTimeout (() =>{
            resolve('Passaram 5 segundos')
        },5000)
    });
}

esperar().then(console.log);