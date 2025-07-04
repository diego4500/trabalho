## Comandos GitHub
* git add . - adicionar todas as alterações (novos arquivos, arquivos modificados e arquivos deletados) no stage;
* git commit -m "comentário" - Salva as alterações que foram adicionadas ao git


## Query buscar produto no banco
```sql
SELECT *
FROM public.document
WHERE data ->> 'nome' = 'Produto Teste';
```
## Token
![image](https://github.com/user-attachments/assets/cd9a9eca-d538-4356-a4c5-9e7088fc7a98) <br>

## Inserindo o token no Postman
![image](https://github.com/user-attachments/assets/c68318a6-950a-4b46-8355-45c91968afde)


## Criando a rota para chamar o Model
registrar na core.api dentro do index.js <br>
![image](https://github.com/user-attachments/assets/9ec6c460-dcec-43bb-b022-5a50687b5132)<br>

produto.model.js<br>

![image](https://github.com/user-attachments/assets/43e07a85-0e1f-478d-b0aa-fb76a0c9fe75)<br>

Rota gerada<br>
![image](https://github.com/user-attachments/assets/56c92fac-2a20-448c-a0de-a5b7eb165a1c)<br>

Dados Json para testar a rota:<br>
```js
// Salvar o produto
{
 "data": {
  "nome": "Betoneira",
  "codigo": "5150",
  "categoria":"",
  "marca":"Samsung",
  "data_fabricacao":"01/06/2023",
  "data_aquisicao":"25/06/2025",
  "valor_aquisicao":"1500",
  "valor_indenizacao":"3000",
  "quantidade":10,
  "fotoId":"",
  "data_ultima_manutencao":""
}
 }

// Script Postman
{
 "data": {
  "nome": "{{nome}}",  
  "codigo":{{codigo}},
  "data_aquisicao":"{{data_aquisicao}}",  
  "quantidade":1  
}
 }

// Testar GET ou DELETE
{
  "id": "{{id}}",
  "updatedAt": "{{updatedAt}}",
  "createdAt": "{{createdAt}}"
}

// Script no Postman
// Pre-request
// Nome do produto
pm.environment.set("nome", "Betoneira");

// Código do produto
pm.environment.set("codigo", "5200");

// Data de aquisição: hoje
const hoje = new Date();
pm.environment.set("data_aquisicao", hoje.toISOString().substring(0, 10));

// Data da última manutenção: 7 dias atrás
const ultimaManutencao = new Date();
ultimaManutencao.setDate(ultimaManutencao.getDate() - 7);
pm.environment.set("data_ultima_manutencao", ultimaManutencao.toISOString().substring(0, 10));

//Post-response

const json = pm.response.json(); // pega o objeto principal

pm.environment.set("id", json.id);
pm.environment.set("createdAt", json.createdAt);
pm.environment.set("updatedAt", json.updatedAt);



```
## Mais informações do Model
O model DLAPP serve para definir a estrutura dos dados, padronizar, validar e organizar como as informações serão tratadas no sistema. Ele garante que todos os campos têm tipo correto, 
regras de obrigatoriedade, valores padrões e opções válidas, facilitando a validação automática e a manutenção da aplicação. Segue abaixo umas informações interessantes:
* Pelo modal do DLAPP é possível gerar operações de CRUD automaticamente de acordo com o método de chamada (GET, POSTE, DELETE, etc);
* Nele também é possível criar hooks e colocar funções async colocando lógicas como por exemplo antes de fazer o CRUDE
* Para o model funcionar corretamento tem que ser feito a importação do core.model
* Para as mensagens tem que importar o core.error
```js
const Model = require('../../system/core.model')
const SystemError = require('../../system/core.error')
```
### Alguns exemplos de hooks
Antes de irmos para o exemplo vamos responder o que é hook.
No contexto do DLAPP, um hook é uma função que permite interceptar e executar lógica personalizada em momentos específicos do ciclo 
da vida do dado, como antes ou depois de criar, atualizar ou excluir os registros.

```js
   async beforeCreateOrUpdate(self, inst, ctx) {
        const campos = Object.keys(self.schema.model)
        for (let campo of campos) {
            if (inst.data[campo] === '') {
                delete inst.data[campo]
            }
        }
    }
```
Essa função async pega o schema do objeto onde acessa o self.schema.model e busca todos os campos, com isso é passada para um vetor.
Com o vetor formado ele é passado no for onde é feita uma condição onde se o campo estiver '', o mesmo é deletado.

```js
async beforeDelete(self, inst, ctx) {
        if (inst.dataValues.data.quantidade > 0) {
            throw new SystemError('Produto não pode ser excluído porque ainda há itens em estoque.')
        }
    }
```
Essa função tem o objetivo de executar uma lógica antes de efetuar o método DELETE. A lógica contida nela é onde
verifica o inst.dataValues.data.quantidade (dados da quantidade em estoque) onde permite a exclusão somente se tiver quantidade zero.

```js
throw new SystemError('Produto não pode ser excluído porque ainda há itens em estoque.')
```
O erro acima só será transmitido se for feito a importação do arquivo...
```js
const SystemError = require('../../system/core.error')
```
## Debugar
No Webstorm é possível visualizar o dado e toda a estrutura do objeto utilizando o Debug.
Para fazer o Debug basta marcar os pontos do breakpointt para parada e pegar as informações do objeto, veja o print abaixo:
![image](https://github.com/user-attachments/assets/2491092b-a8ea-4192-b13a-7bc39588653f)

## Qual a diferença em passa o id no GET e não passar?
Ao passar o id e efetuar o GET, é tido como resposta os dados daquele id. Veja ao debugar o que temos de informação:
enviei esse GET 
```
http://localhost:3001/api/treinamento-admin/produto/model?id=9be90e40-55bc-11f0-b01f-99e6a54695d7
```
![image](https://github.com/user-attachments/assets/a68fe8d2-dca5-42dd-aa3a-7398bf3b064c)

Agora quando não passamos o ID ao efetuar o GET temos como resposta todos os dados (dentro de um array) relacionado a esse model
```http://localhost:3001/api/treinamento-admin/produto/model

```
![image](https://github.com/user-attachments/assets/7f931b8d-612b-4207-b9d0-4bd6884d3aa7)

## Estrutura dos dados
No DLApp segue abaixo o exemplo da estrutura de um dado
![image](https://github.com/user-attachments/assets/8ecc23a9-6dec-4b05-b781-4bd7634e4997)


*** O UUID v4 é um identificador único de 128 bits gerado aleatoriamente. Ele é amplamente usado para identificar informações de forma única em sistemas, banco de dados e etc.

##  dbupgrade
No contexto do DLAPP o arquivo core.dbupgrade está importando um módulo responsável por executar script de atualização do banco de dados. Esse
tipo de script geralmente é chamado de DbUpgrade, seed ou migration script, dependendo do contexto.
### Finalidade Principal
O módulo core.dbupgrade serve para automatizar inserções, alterações ou correções no banco de dados, que precisam ser aplicadas uma única vez ou em cenários específicos, como:
* Inserir dados iniciais(ex.: tipos padrão, configurações iniciais;
* Corrigir dados com erro;
* Migrar dados de um formato antigo para outro;
* Atualizar estrutura interna de documentos JSONB, por exemplo.
Exemplo prático: Digamos que você criou um novo model chamado tipo-locacao.model.js e quer que, quando o sistema for iniciado, ele insira automaticamente esses três registros:

```js
  { nome: 'Diária', dias: 1 },
  { nome: 'Semanal', dias: 7 },
  { nome: 'Mensal', dias: 30 }
```
Nesse caso teriamos que usar  o core.dbupgrade para criar um arquivo tipo-locacao.dbupgrade.js que insere isso no banco somente se ainda não existir

Estrutura do dbupgrade
![image](https://github.com/user-attachments/assets/705171ce-94a7-4ffa-926a-515804430338)

![image](https://github.com/user-attachments/assets/395196cb-2aa0-4381-aa11-253c088f45e1)

### Processo para criação de um dbupgrade do zero
### 1 - Estrutura da pasta do plugin
![image](https://github.com/user-attachments/assets/5f3d5476-fdbf-44f8-9fc6-7c2b7070377f)

### 2 - Criando o Model
Nesse model criaremos a estrutura dos dados. Quando for criado o dado dentro de data, o mesmo respeitará essa estrutura criada. 

![image](https://github.com/user-attachments/assets/1c9527a6-e118-4ca9-8c54-ca14968f596c)

## 3 - Criando o dbupgrade.js

![image](https://github.com/user-attachments/assets/b9e57308-c984-484d-ad28-d64e4b58e9f9)
![image](https://github.com/user-attachments/assets/4717831c-dc25-4877-a8cd-7d4200478d1f)

O que essa parte do código quer dizer? <br>
![image](https://github.com/user-attachments/assets/ba5375c0-049b-4671-98cb-f79ddf10c1b1) <br>
Esse trecho é responsável exportar toda essa estrutura da function execute() para dentro do setup, porque esse setup() é executado quando o sistema é incializado, ou seja, além desse dbupgrade são executados vários outros dbupgrades de outros plugins. No index.js é feito um require desse setup() onde automaticamente é executado o execute(). <br>
![image](https://github.com/user-attachments/assets/13885843-4a96-407c-8cbe-e7ce43bb5776)


## 4 - Acrescentando informações no index.js 
![image](https://github.com/user-attachments/assets/14c65749-6ffb-4a07-b7e1-8797c55dfb2e)

# Fild Option
O fild option é uma forma de estruturarar as opções de um tipo como por exemplo: 
Produto de Locação ou de Venda?

## Estruturando o fild Option

### Criando o Model
Na imagem abaixo estamos criando o Model para estruturar o fild option no banco de dados
![image](https://github.com/user-attachments/assets/c0cdeff9-4c80-431f-a546-085dc1ac56bc)
No index é preenchido os dados que terão o field options (no topo). Abaixo no  setup() é registrado no core.api para dali para frente registrar esses dados no banco de dados.
![image](https://github.com/user-attachments/assets/5e0a8e26-f782-4978-a92d-27dbb25e1124)
Ao iniciar o sistema é criado o field options no banco. 

![image](https://github.com/user-attachments/assets/670d6942-0b92-460a-8a39-63bce40618dc)


