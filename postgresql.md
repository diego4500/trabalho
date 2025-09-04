## PostgreSQL
O PostgreSQL é um banco de dados relacional, ou seja, possui uma estrutura de tabelas.
No DLApp usa-se o PostgreSQL como banco de dados documental.
O PostgreSQL não é um banco documental nativo, como o Mongo DB, mas ele pode armazenar dados documentais como por exemplo JSON.
Como o PostgreSQL armazena dados documentais?
Tipo JSON: armazena o conteúdo como texto, preservando exatamente o formato original. 

## Query
```sql
SELECT * FROM public.document WHERE type = 'treinamento-admin/tipo-locacao';

SELECT * FROM public.document WHERE type = '.treinamento-admin/tipo-ativacao-fo';

SELECT * FROM document 
WHERE type ILIKE '%treinamento-admin%'

DELETE FROM public.document WHERE type = '.treinamento-admin/tipo-ativacao-fo';

SELECT * FROM public.document WHERE type = 'treinamento-admin/produto';

SELECT * FROM public.document WHERE id = '71254830-a28a-11ef-b828-dfa679d6ab5c';


DELETE FROM "treinamento-admin/produto"
WHERE data->>'nome' = 'Betoneira';

DELETE FROM public.document WHERE type = 'treinamento-admin/produto';

DELETE FROM public.document
WHERE type = 'treinamento-admin/tipo-locacao';


```


