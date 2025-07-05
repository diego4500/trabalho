## VUE JS
O Vue JS é um framework em Javascript para construir interfaces. Ele segue uma arquitetura <strong>MVC Model, View e Controller</strong>. O Vue fica na parte do view da arquitetura. Principais conceitos do Vue JS.
* Tudo é componente;
* Tudo é reativo;
* É progressivo - Pode ser usado tanto em projetos pequenos quanto em grandes projetos.
Principais Características:
Ele é componente de arquivo único, ou seja, em um único arquivo terá html, css e javascript.
É possível fazer condições e loops, eventos, etc.

## Declarative Rendering
O Declarative Rendering é uma forma de tornar a página dinâmica, pois a interface acompanha automaticamente as mudanças nos dados. Outro detalhe interessante é que é menos verboso porque você não precisa escrever manualmente todo o passo a passo para atualizar o DOM (ex.: criar elementos, inserir, remover, etc).
Você só declara o que quer ver e o Vue faz todo o trabalho pesado de atualizar a tela conforme os dados mudam. <br>
![image](https://github.com/user-attachments/assets/49394080-96de-4b5d-b394-e2fc00747160) <br>
![image](https://github.com/user-attachments/assets/05bc11a0-1dc7-4b21-9c30-10428b560a87) <br>
![image](https://github.com/user-attachments/assets/7356ac10-333a-4ed1-95f8-2fca17e9d47d) <br>

## O DOM acessando um vetor no JS
```js
var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 5.99,
        "active": false,
        "quantity": 1
    }
]

const SelfServiceMachine ={
    data(){
        return{
            message: "MCDonald's",
            products: window.products
        }
    }
};

Vue.createApp(SelfServiceMachine).mount('#app');
```

Com o <strong>products: window.products</strong> faz esse vetor de produtos ficar disponível no DOM.
