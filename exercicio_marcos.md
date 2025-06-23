# Exercício 0 - Documentar discussões realizadas
## Backend - Node.JS
Node.js é um ambiente de execução (runtime environment) para JavaScript fora do navegador.
Com ele, tornou-se possível utilizar JavaScript no back-end, criar ferramentas de linha de comando, servidores web e até aplicações desktop, quando combinado com outras tecnologias (como Electron).

Isso é viável porque o Node.js utiliza o motor V8 do Google Chrome um motor de alto desempenho escrito em C++ que compila JavaScript em código de máquina nativo, tornando sua execução rápida e eficiente.
Segue abaixo algumas características:
* É assícrono e orientado a eventos;
* Vasto ecossistema de pacotes via NPM (Package Manager).

## Aplicações comuns
* APIs RESTful  (GET, POST, PUST, DELETE)
* Aplicações em tempo real
* Ferramenta linha de comando
* Backend de sistemas Web
* Aplicações desktop com Electron

## NPM - Gerenciador de Pacotes
* Permite instalar e gerenciar bibliotecas.
* Contém milhões de pacotes prontos para uso.

## Vantagens do Node.JS
* Javascript no backend
* Alta performance por V8 compilar o JS em código de máquina
* Assíncrono e não bloqueante - Ideal para aplicações com muitas requisições simultâneas, como APIs e chats em tempo real.
* Grande ecossistema (npm)
* Escalabilidade - Projetado para lidar com grande volume de conexões simultâneas.
* Cross-platform - Roda em Windows, Linux e macOS com facilidade.

## Desvantagens do Node.js
* Single-threaded - Não é ideal para tarefas pesadas de CPU (Renderização de vídeos, etc)
* Callback hell - Embora o uso do async/await tenha melhorado isso, códigos assíncronos mal escritos podem ser difícil manter.
* Problemas com concorrência real - Por não ser multithread por padrão , pode exigir soluções mais complexas para paralelismo real.
* Maturidade de bibliotecas - Algumas bibliotecas populares ainda são menos estáveis ou maduras do quem outras linguagens.
* Gerenciamento de erros assíncronos - Se mal tratado, erros em promises podem passar despercebidos.

## Express
O Express é um framework do Node.js que facilita a criação de servidores e APIs. Ele permite implementar APIs que seguem a arquitetura RESTful.
Abaixo fiz uma prática onde criei um arquivo com 30 dados com nome, email e telefone no formato json. Criei uma rota com express que exibe essa pagina html com tabela onde no arquivo js tem uma fetch chamando a rota (utilizando express) para pegar os dados do arquivo json e trazer para a tabela. <br>
https://github.com/diego4500/trabalho/blob/develop/exemplos/index.js <br>
https://github.com/diego4500/trabalho/blob/develop/exemplos/express/index.html <br>

## Axios
Axios é uma biblioteca JavaScript baseada em Promises usada para fazer requisições HTTP, tanto no fontend quanto no backend. No exemplo prático eu utilizei o Axios para acessar uma rota interna com dados JSON. No backend utilizei o Axios para acessar o JSON de uma API externa onde no frontend tem outro Axions para tratar e exibir em uma tabela. <br>
Linha 48 - Utilizando o Axios no front <br>
https://github.com/diego4500/trabalho/blob/develop/exemplos/public/axios_api_externa/index.html <br>
Linha 36 - Utilizando o Axios no backend para acessar o JSON de uma API externa <br>
https://github.com/diego4500/trabalho/blob/develop/exemplos/index.js <br>

## Handlebars
Handlebars é um mecanismo de template usado para gerar páginas HTML dinâmicas no servidor, facilitando a separação entre a lógica da aplicação e a apresentação visual. Ele permite criar layouts reutilizáveis e inserir dados diretamente nas páginas de forma simples, tornando o desenvolvimento web mais organizado e produtivo, especialmente em projetos com Node.js. <br>
* Separação entre lógica e visual: Facilita a manutenção do código, mantendo a lógica no backend e a apresentação no template
* Reutilização de layouts: Permite cria layouts e componentes reaproveitáveis, economizando tempo e esforço.
* Sintaxe Simples e intuitiva: Fácil de aprender e entender, até para iniciantes.
* Gração de HTML no servidor: Melhora o SEO e o tempo de carregamento inicial da página, pois o HTML já chega pronto ao navegador.
* Facilidade de integração: Funciona muito bem com frameworks backend como Express no Node.JS.
* Suporte a condicionais e loops: Permite inserir lógicas simples diretamento nos templates, tornando-os mais dinâmicos.
<br>
Abaixo segue o link da branch do projeto: <br>
https://github.com/diego4500/trabalho/tree/handlebars/handlebars <br> <br>

Abaixo criei um projeto totalmente com html, css, node.js e handlebars e nenhum javascript no front <br>
  ![{755ED9D8-FD66-48CA-9A98-8B136513AB46}](https://github.com/user-attachments/assets/3f826409-569f-4cce-92b5-c1cd919c08fd) 

  ![{DE074C62-1BA7-4D36-B68F-F4AED66FE252}](https://github.com/user-attachments/assets/e0865b97-8bd3-4f7a-951d-58ca2d0501a9)
  ![{EE735DC7-71AE-4EAF-8498-0555925FEB15}](https://github.com/user-attachments/assets/82695c33-c633-45db-903a-8eb65084a503)
  ![{D6D85E9A-04D0-4124-A7C9-E817B6B9A2FB}](https://github.com/user-attachments/assets/e6ebc5e7-0a9d-4159-b5a4-a9710e17f35c) <br>
  
## Como criar um plugin no DLApp
### Configurando no backend
1. primeiramente crie a pasta do plugin no endereço - dlapp\api\src\plugins
2. após criar a pasta crie uma estrutura mínimo que é:
   dlapp\api\src\plugins\nome_plugin (nome do plugin é a pasta)
3. Em seguida nessa pasta crie o index.js. Abaixo segue uma estrutura mínima:
  ```js
module.exports = {
  name: 'treinamento-admin', 
  label: 'Treinamento Admin',

  async setup () {
// O core.api tem como finalidade centralizar a criação e o gerenciamento das APIs no DLAPP.
// Ele fornece métodos como Api.Rest e Api.Register para definir rotas HTTP (GET, POST, etc.)
// e registrá-las corretamente no sistema, respeitando o padrão modular de plugins.
    const Api = require('../system/core.api') 

// Aqui é feito o registro da API no core.api.
// O caminho fornecido deve apontar para o arquivo .api.js (sem extensão),
// que exporta uma instância de Api ou Api.Rest.
// Isso garante que as rotas definidas nesse arquivo sejam carregadas pelo DLAPP.
    await Api.Register('/treinamento-admin/apis/treinamento') 

  }
}
```
  





