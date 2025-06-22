
function buscarUsuario(){
    return new Promise ((resolve, reject) =>{
        setTimeout (() =>{
            resolve({nome: "Diego", idade: 36});
        },3000)
    })
}

async function usuario(){
    const usuario = await buscarUsuario();
    console.log (`Nome: ${usuario.nome}, Idade ${usuario.idade}`)
}

usuario();