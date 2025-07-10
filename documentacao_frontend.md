# Frontend
### Estrutura de Pastas
![image](https://github.com/user-attachments/assets/064c260f-06f5-425b-890c-107e57c82e27)
 <br>

### Estrutura do Menu Lateral
Abaixo segue a estrutura do menu lateral:

```js
  store.commit('system/addMenuItem', {
    order: '010',
    group: 'Admin',
    groupIcon: 'work',
    subgroup: 'Admin',
    label: 'Produtos',
    to: '/treinamento-admin/produtos/view',
    icon: 'inventory_2',
    sublabel: 'Produtos'
  })
```

Abaixo segue a explicação de algumas:
* odrder - altera a ordem dos menus
* authentication - permissão de acesso admin ou user. Se deixar vazio qualquer um pode ter acesso
* to - caminho da rota para onde o menu vai redirecionar
* group - nome do grupo principal no menu, exemplo: Loja, clientes, produto, etc.
* subgoup - nome de subgrupo se houver, opcional
* label - nome que aparece no menu
* groupIcon - Ícone do grupo principal (usado pelo Quasar)
* icon - ícone do item específico (usado pelo Quasar)

Como podemos ver essa estrutura monta dinamicamente a navegação lateral, agrupando e ordenando os menus do sistema de acordo com a configuração que foi passada.

### Segue abaixo um exemplo do index.js
```js
import DlLayoutMenu from "../system/components/DlLayoutMenu.vue" // Importa o componente de Layout de menu lateral da aplicação.
import {routes} from "../system" // Importa a estrutura base das rotas da aplicação.
import ProdutoView from "./produtos/ProdutosView.vue" // Importa o componente Vue responsável pela visualização/listagem de produtos.

// Abaixo segue a estrutura que será exportada:
export default ({store}) => {
  routes.push([ // Adiciona novas rotas na aplicação.
    {
      path: '/treinamento-admin/produtos', // Criação de uma rota com caminho '/treinamento-admin/produtos'
      component: DlLayoutMenu, // Incluíndo o menu na página
      children: [ // Filho do path e com isso é criado a rota '/treinamento-admin/produtos/view'
        {path: 'view', component: ProdutoView}
      ]
    }
  ])

  store.commit('system/addMenuItem', { // Adiciona itens no menu lateral da aplicação e outras configurações como ícone, grupo, ordem e etc.
    order: '010',
    group: 'Admin',
    groupIcon: 'work',
    subgroup: 'Admin',
    label: 'Produtos',
    to: '/treinamento-admin/produtos/view',
    icon: 'inventory_2',
    sublabel: 'Produtos'
  })

```
### Arquivo ProdutosView.vue
```js
<template> // Bloco principal do component Vue. Aqui fica o que vai aparecer na tela
  <dl-view
    v-model="data"
    :config="config"
    :columns="columns"
    empty-message="Nenhum produto encontrado"> // É um componente pronto do DLApp que já traz funcionalidades como
    // busca, filtros, exibição em tabela, etc
    <template v-slot:title>Produtos</template>
    <template v-slot:subtitle>Listagem de produtos cadastrados</template>
    <template v-slot:card="{ row }"> // O componente dl-view consegui tratar esse objeto row e desencadear nos card, se
      o objeto tiver 5 produtos, serão listados 5 produtos.
      <div class="text-weight-bold">{{ row.data.nome }}</div>
    </template>
  </dl-view>
</template>

<script>
export default {
  name: 'ListarProdutos',
  data () {
    return {
      columns: [
        {
          name: 'nome', // Configuração do campo que será listado.
          required: true,
          align: 'left', // Alinhado a esquerda.
          field: row => row.data.nome, // Parte do objeto que será acessado
          sortable: true
        }
      ],
      data: {
        rows: []
      }, // O DLAPP vai preencher esse objeto automaticamente com o resultado da API
      config: {
        api: './treinamento-admin/produto/model' // Rota de listagem dos produtos vinda do backend
        // form: '/form-url-se-existir'
      }
    }
  }

}
</script>

```
### Fluxo do plugin e da criação da página
<img width="1211" height="806" alt="image" src="https://github.com/user-attachments/assets/dae903e0-5faf-488c-bc8c-bd7cf0bd9150" />





