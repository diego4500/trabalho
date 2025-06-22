
function buscarUsuario(){
    return new Promise ((resolve, reject) =>{
        setTimeout (() =>{
            resolve({nome: "Diego", idade: 36});
        },3000)
    })
}
console.log('Buscando dados...')
buscarUsuario().then(resposta =>{
    console.log(`Nome: ${resposta.nome} - Idade ${resposta.idade}`);
}); 