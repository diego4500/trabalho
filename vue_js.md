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
![image](https://github.com/user-attachments/assets/21f47a19-74cf-4a63-b773-d25e0a520ba4)

## Diretivas do View
No view é possível usar comandos especiais no HTML que fazem a ligação entre o template HTML e os dadosdo Javascript (o data() do vue por exemplo). Essas
diretivas permitem que você controle o DOM usando apenas marcações HTML + lógica Vue, sem ter que usar diretamente document.querySelector, innerHTML, createElement etc, no Javascript puro. 
Exemplos de comandos básicos utilizados dentro das tags: v-text, v-if, v-for, etc.

## Evento de click
No html temos esse trecho
```html
<button @click="item.quantity > 0 && item.quantity--">-</button>
```
onde ao clicar no button - vai decrementando o valor, veja que tem um limitador para quando chegar no <strong>0</strong> parar.

## For no Vue
```html
            <div class="product" v-for="item in products">
                <div class="photo">
                    <img :src="item.photo">
                </div>
                <div class="description">
                    <span class="name">{{ item.name }}</span>
                    <span class="price">${{ item.price.toFixed(2) }}</span>
                    <div class="quantity-area">
                        <button @click="item.quantity > 0 && item.quantity--">-</button>
                        <span class="quantity">{{ item.quantity }}</span>
                        <button @click="item.quantity++">+</button>
                    </div>
                </div>
            </div>
```
Acima temos o trecho do código html, nesse trecho é passado um for para listar os produtos, veja o que acontece em cada linha:
* v-for="item in products" - Aqui o vetor products é passado no for onde cada item representa um índica;
* o item se torna o início para acessar o índice e consequentemente o objeto, com isso passa-se na etrutura do products como:
  photo, name, price, active e quantility.
  
### Explicando o trecho
```html
  <div 
            class="product" 
            v-for="item in products"
            @click="item.active = !item.active"
            :class="item.active ? 'selected' : '' ">
```
* @click="item.active = !item.active - Ao clicar na região dessa div é acionado um evento onde pega o item do vetor acessa a chave active e altera
  o valor dela para o oposto que está.
* :class="item.active ? 'selected' : ''" - se o item.active for true é selecionado a classe selected se for false não escolhe nenhuma classe.
Esse efeito serve para ao clicar mudar a cor da borda da div. <br>
![{7AFA492A-0E20-408A-8A82-C4F79394A56E}](https://github.com/user-attachments/assets/dbeb66f9-e208-4f80-b645-206e4d727f80)
![{7FC933A8-D7C2-4690-8DAF-67587F9AE8EE}](https://github.com/user-attachments/assets/0b6f8292-b650-4be3-bbfa-11cdada8eea1)


