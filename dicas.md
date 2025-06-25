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
![image](https://github.com/user-attachments/assets/cd9a9eca-d538-4356-a4c5-9e7088fc7a98)

## Criando a rota para chamar o Model
registrar na core.api dentro do index.js <br>
![image](https://github.com/user-attachments/assets/9ec6c460-dcec-43bb-b022-5a50687b5132)

produto.model.js

![image](https://github.com/user-attachments/assets/43e07a85-0e1f-478d-b0aa-fb76a0c9fe75)

Rota gerada
![image](https://github.com/user-attachments/assets/56c92fac-2a20-448c-a0de-a5b7eb165a1c)

