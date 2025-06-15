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
Handlebars é um mecanismo de template utilizado para gerar páginas HTML dinâmicas a partir de dados fornecidos pela aplicação. Sua principal função é separar a lógica de programação do conteúdo visual, permitindo que desenvolvedores criem aplicações mais organizadas, reutilizáveis e de fácil manutenção. Com o Handlebars, o desenvolvedor define estruturas de apresentação utilizando marcações próprias dentro dos arquivos de template. Essas marcações funcionam como espaços reservados para que informações provenientes do código backend possam ser inseridas de forma dinâmica durante a renderização da página. Um dos grandes diferenciais do Handlebars é a possibilidade de reaproveitar layouts, criar componentes visuais reutilizáveis e aplicar condições e repetições diretamente nas views, sem misturar regras de negócio com a camada visual. Isso torna o desenvolvimento web mais eficiente e padronizado.
No contexto Node.JS o Handlebars é amplamente adotado em conjunto com frameworks como Express para gerar respostas HTML personalizadas a cada requisição, sendo uma solução leve, simples e de fácil integração para aplicações que necessitam de páginas dinâmicas e estruturadas.
Em resumo, Handlebars é uma tecnologia que proporciona organização, produtividade e flexibilidade na construção de aplicações web focando na separação entre dados e visualização.


