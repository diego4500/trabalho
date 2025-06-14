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
