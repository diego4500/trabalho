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
  "nome": "Produto Teste"
}
 }
```

