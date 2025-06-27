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
```json
{
 "data": {
  "nome": "Betoneira",
  "codigo": "5150",
  "categoria":"",
  "marca":"Samsung",
  "data_aquisicao":"25/06/2025",
  "valor_aquisicao":"1500",
  "valor_indenizacao":"3000",
  "quantidade":10,
  "fotoId":"",
  "data_ultima_manutencao":""
}
 }
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
