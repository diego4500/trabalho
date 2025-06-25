## Comandos GitHub
* git add . - adicionar todas as alterações (novos arquivos, arquivos modificados e arquivos deletados) no stage;
* git commit -m "comentário" - Salva as alterações que foram adicionadas ao git


## Query buscar produto no banco
`js
SELECT *
FROM public.document
WHERE data ->> 'nome' = 'Produto Teste';
`
