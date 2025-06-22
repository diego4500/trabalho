# Promise, Async e Await
Promise, Async e Await
Nesse aprendizado, pratiquei diversas situações envolvendo Promise, Callback, Async e Await.
Essas funções, quando usadas em conjunto, têm o objetivo de controlar o comportamento assíncrono do JavaScript, tornando possível executar operações de forma síncrona (ou seja, aguardando cada etapa) quando necessário, trazendo segurança e confiabilidade na requisição de dados.

No Node.js (assim como no navegador), o JavaScript possui um comportamento assíncrono:
Ou seja, não aguarda uma requisição finalizar para seguir o fluxo. Isso permite ao sistema executar várias tarefas ao mesmo tempo, aumentando a velocidade e eficiência.

Porém, muitas vezes precisamos de um comportamento síncrono, onde uma etapa depende dos dados da etapa anterior (por exemplo, salvar no banco só após receber os dados).

Para essa solução, usamos Promise, async e await. Com eles, podemos controlar melhor o fluxo do código, aguardando operações terminarem antes de seguir.
Fluxo síncrono: <br>
1 - Dados inseridos <br>
2 - Dados recolhidos <br>
3 - Dados salvo no banco de dados <br> <br>

Fluxo assíncrono: <br>
2 - Dados recolhidos <br>
3 - Dados salvo no banco de dados <br>
1 - Dados inseridos <br>

## No código
```js
function inserirDados() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("1 - Dados inseridos");
            resolve("dados");
        }, 1000);
    });
}

function recolherDados(dados) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("2 - Dados recolhidos");
            resolve(dados + " recolhidos");
        }, 1000);
    });
}

function salvarNoBanco(dados) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("3 - Dados salvos no banco de dados");
            resolve();
        }, 1000);
    });
}

async function fluxo() {
    const dados = await inserirDados();
    const recolhidos = await recolherDados(dados);
    await salvarNoBanco(recolhidos);
    console.log("Fluxo finalizado!");
}

fluxo();
```
Veja agora abaixo um exemplo onde é solicidados os dados via requisição de uma API.
* Na const resposta existe uma fetch que retorna uma promise, após receber esses dados segue para próxima etapa.
* Nessa etapa o const posts aguarda uma promessa da conversão dos dados em JSON
* Ao finalizar temos objeto com todos os dados prontos para ser trabalhados.
* Por fim esses dados passa por um foreach para serem exibidos.
```js
async function buscarPosts(id){
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await resposta.json();
    posts.forEach(element => {
        if(element.id === id){
            console.log(element.title);
        }
    });
}

buscarPosts(19);
```
